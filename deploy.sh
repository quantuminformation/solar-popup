#!/usr/bin/env bash

exists=`git show-ref refs/heads/gh-pages`
if ! [ -n "$exists" ]; then
    echo 'branch exists!'
    git checkout -b "gh-pages"
else
    git checkout "gh-pages"
fi

git merge master
git add dist/* -f
git commit -a -m 'build files'
git push origin gh-pages
git checkout master
