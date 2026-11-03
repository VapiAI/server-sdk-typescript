#!/usr/bin/env bash
set -euo pipefail

# Fetch origin/main immediately before calling this script. Never release a
# commit that has only appeared on an unreviewed branch or tag.
if [[ -z "${GITHUB_REF_NAME:-}" || "${GITHUB_REF:-}" != "refs/tags/${GITHUB_REF_NAME}" || -z "${GITHUB_SHA:-}" ]]; then
  echo "::error::Release requires a tag push and an event commit."
  exit 1
fi

release_commit=$(git rev-parse --verify "${GITHUB_SHA}^{commit}")
checkout_commit=$(git rev-parse --verify 'HEAD^{commit}')
if [[ "$checkout_commit" != "$release_commit" ]]; then
  echo "::error::Checkout does not match the release event commit."
  exit 1
fi

if ! git merge-base --is-ancestor "$release_commit" refs/remotes/origin/main; then
  echo "::error::Release commit must already be merged into protected main."
  exit 1
fi

echo "Release commit $release_commit is on protected main."
