const { readFileSync } = require("node:fs");

const { GITHUB_REF: ref = "", GITHUB_REF_NAME: tag = "" } = process.env;

if (!tag || ref !== `refs/tags/${tag}`) {
    console.error("Release requires a tag ref matching GITHUB_REF_NAME.");
    process.exit(1);
}

const { version } = JSON.parse(readFileSync("package.json", "utf8"));

if (tag.replace(/^v/, "") !== version) {
    console.error(`Release tag ${tag} does not match package version ${version}.`);
    process.exit(1);
}
