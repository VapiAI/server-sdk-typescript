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
