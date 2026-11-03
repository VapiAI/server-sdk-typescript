const assert = require("node:assert/strict");
const { mkdtempSync, readFileSync, rmSync, writeFileSync } = require("node:fs");
const { tmpdir } = require("node:os");
const { join, resolve } = require("node:path");
const { spawnSync } = require("node:child_process");
const { test } = require("node:test");

const validator = resolve(__dirname, "validate-release.cjs");

for (const version of ["3.0.0", "3.0.1-alpha.1", "3.0.1-beta.2", "2.9.0"]) {
    for (const prefix of ["", "v"]) {
        const tag = `${prefix}${version}`;
        test(`accepts matching release ${tag}`, () => {
            const cwd = mkdtempSync(join(tmpdir(), "sdk-release-"));
            try {
                writeFileSync(join(cwd, "package.json"), JSON.stringify({ version }));
                const result = spawnSync(process.execPath, [validator], {
                    cwd,
                    env: { ...process.env, GITHUB_REF: `refs/tags/${tag}`, GITHUB_REF_NAME: tag },
                    encoding: "utf8",
                });
                assert.equal(result.status, 0, result.stderr);
            } finally {
                rmSync(cwd, { recursive: true, force: true });
            }
        });
    }
}

for (const [ref, tag] of [
    ["refs/heads/refs/tags/attack", "refs/tags/attack"],
    ["refs/heads/refs/tags/v3.0.0", "v3.0.0"],
    ["refs/heads/main", "main"],
    ["refs/tags/v999.0.0", "v999.0.0"],
    ["refs/tags/v3.0.0-beta.1", "v3.0.0-beta.1"],
    ["refs/tags/vv3.0.0", "vv3.0.0"],
    ["refs/tags/v3.0.0", "3.0.0"],
    ["refs/tags/", ""],
    ["", ""],
]) {
    test(`rejects invalid release ${ref} / ${tag}`, () => {
        const cwd = mkdtempSync(join(tmpdir(), "sdk-release-"));
        try {
            writeFileSync(join(cwd, "package.json"), JSON.stringify({ version: "3.0.0" }));
            const result = spawnSync(process.execPath, [validator], {
                cwd,
                env: { ...process.env, GITHUB_REF: ref, GITHUB_REF_NAME: tag },
                encoding: "utf8",
            });
            assert.equal(result.status, 1, result.stderr);
            assert.match(result.stderr, /Release (requires a tag ref|tag .* does not match package version)/);
        } finally {
            rmSync(cwd, { recursive: true, force: true });
        }
    });
}

test("package job rejects branch refs before any release steps run", () => {
    const workflow = readFileSync(resolve(__dirname, "../workflows/ci.yml"), "utf8");
    assert.match(workflow, /if: github\.event_name == 'push' && startsWith\(github\.ref, 'refs\/tags\/'\)/);
});

test("package job validates the release before installing or building", () => {
    const workflow = readFileSync(resolve(__dirname, "../workflows/ci.yml"), "utf8");
    const packageJob = workflow.split("  package:\n")[1].split("  publish:\n")[0];
    const validation = packageJob.indexOf("run: node .github/scripts/validate-release.cjs");
    assert.ok(validation >= 0, "release validation is missing");
    assert.ok(validation < packageJob.indexOf("run: pnpm install"));
    assert.ok(validation < packageJob.indexOf("run: pnpm build"));
    assert.ok(validation < packageJob.indexOf("npm pack"));
});

function gitFixture(run) {
    const cwd = mkdtempSync(join(tmpdir(), "sdk-release-history-"));
    const env = {
        ...process.env,
        GIT_AUTHOR_NAME: "Release test", GIT_AUTHOR_EMAIL: "test@example.com",
        GIT_COMMITTER_NAME: "Release test", GIT_COMMITTER_EMAIL: "test@example.com",
    };
    const git = (...args) => {
        const result = spawnSync("git", args, { cwd, env, encoding: "utf8" });
        assert.equal(result.status, 0, result.stderr);
        return result.stdout.trim();
    };
    try {
        git("init", "--initial-branch=main");
        git("commit", "--allow-empty", "-m", "Approved release");
        const approved = git("rev-parse", "HEAD");
        git("update-ref", "refs/remotes/origin/main", approved);
        Object.assign(env, { GITHUB_REF: "refs/tags/v3.0.0", GITHUB_REF_NAME: "v3.0.0", GITHUB_SHA: approved });
        const guard = () => spawnSync("bash", [resolve(__dirname, "verify-release-commit.sh")], { cwd, env, encoding: "utf8" });
        run({ git, guard, env, approved });
    } finally {
        rmSync(cwd, { recursive: true, force: true });
    }
}

test("allows a release commit on main, including an older approved commit", () => {
    gitFixture(({ git, guard, approved }) => {
        assert.equal(guard().status, 0);
        git("commit", "--allow-empty", "-m", "Newer approved commit");
        git("update-ref", "refs/remotes/origin/main", git("rev-parse", "HEAD"));
        git("checkout", "--detach", approved);
        assert.equal(guard().status, 0);
    });
});

test("resolves annotated tag objects to their approved commit", () => {
    gitFixture(({ git, guard, env }) => {
        git("tag", "-a", "v3.0.0", "-m", "Release");
        env.GITHUB_SHA = git("rev-parse", "v3.0.0");
        assert.equal(guard().status, 0);
    });
});

test("rejects an unmerged release commit", () => {
    gitFixture(({ git, guard, env }) => {
        git("checkout", "-b", "unapproved");
        git("commit", "--allow-empty", "-m", "Unreviewed change");
        env.GITHUB_SHA = git("rev-parse", "HEAD");
        const result = guard();
        assert.equal(result.status, 1);
        assert.match(result.stdout, /must already be merged/);
    });
});

test("rejects a checkout that differs from the release event", () => {
    gitFixture(({ git, guard }) => {
        git("commit", "--allow-empty", "-m", "Different checkout");
        const result = guard();
        assert.equal(result.status, 1);
        assert.match(result.stdout, /does not match/);
    });
});

test("fails closed when main or the event commit is missing", () => {
    gitFixture(({ git, guard, env }) => {
        git("update-ref", "-d", "refs/remotes/origin/main");
        assert.notEqual(guard().status, 0);
        delete env.GITHUB_SHA;
        assert.equal(guard().status, 1);
    });
});

test("rejects branch refs masquerading as release tags", () => {
    gitFixture(({ guard, env }) => {
        env.GITHUB_REF = "refs/heads/refs/tags/v3.0.0";
        env.GITHUB_REF_NAME = "refs/tags/v3.0.0";
        assert.equal(guard().status, 1);
    });
});
