cd /Users/bartel/Documents/development/Sevi-Docs/ &&
cp '/Users/bartel/Documents/development/Sevi-Mobile/CHANGELOG.md' ./docs/changelog.md &&
echo "---
sidebar_position: 10
---
\n$(cat ./docs/changelog.md )" > ./docs/changelog.md &&
git add . &&
git commit -m "new changelog" &&
git push