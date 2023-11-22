set -e

git add .
git commit -m "deploy"
git push -f git@github.com:RocYan98/RocYan98.github.io.git main
