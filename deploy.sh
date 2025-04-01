set -e

LANG=en_GB git add .
LANG=en_GB git commit -m "deploy"
LANG=en_GB git push -f git@github.com:RocYan98/RocYan98.github.io.git main

#npm run docs:build
#scp -q -r /Users/Yan/Desktop/vuepress/src/.vuepress yan@macmini:
#echo scp finish!