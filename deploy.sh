#!/usr/bin/env bash
git commit -am "Save local changes"
  git checkout -B gh-pages
  git add -f build /Users/nikos/WebstormProjects/solar-popup/node_modules/systemjs/dist/system.js
  git commit -am "Rebuild website"
  git filter-branch -f --prune-empty --subdirectory-filter build
  git push -f origin gh-pages
  git checkout -
