#!/bin/bash

nowDate=$(date)

npm run build
cp ./dist/* ./
git add --all
git commit -m "new release @$nowDate"
git push origin gh-pages -f