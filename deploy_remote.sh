set -e

LANG=en_GB git add .
LANG=en_GB git commit -m "deploy"
LANG=en_GB git push -f git@github.com:RocYan98/RocYan98.github.io.git main

npm run docs:build
scp -r -P 9995 /Users/Yan/Desktop/vuepress/src/.vuepress yan@rocyan.cn:
echo scp finish!