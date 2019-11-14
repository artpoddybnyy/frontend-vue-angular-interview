rm -rf documentation/.vuepress/dist/
npm run docs:build
cd documentation/.vuepress/dist/
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:artpoddybnyy/frontend-vue-interview.git master:gh-pages
