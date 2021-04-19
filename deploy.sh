#! /usr/bin/env sh

set -ex

npm run build

cd dist

git init
git add -A
git commit -m "DEPLOY"

git push -f git@github.com:vandenbroeletom/dpm.git master:gh-pages

cd -