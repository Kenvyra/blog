#!/bin/ash

set -e

REPO_URL="https://github.com/Kenvyra/website"
REPO_DIR="/www"
REPO_BRANCH="gh-pages"

git clone $REPO_URL $REPO_DIR --branch $REPO_BRANCH --single-branch --depth 1

while true; do
  sleep 900
  git -C $REPO_DIR pull
done
