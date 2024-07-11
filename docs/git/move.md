## 创建 git 仓库:

```shell
mkdir test
cd test
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/debby-echo/test.git
git push -u origin "master"
```
## git迁移现有项目到其他项目

```shell
export file=xxx
git clone http://xxxyinhao/$file.git
cd $file
git remote rename origin old-origin
git remote add origin http://xxx/frontend/$file.git
git push -u origin --all
git push -u origin --tags
cd ../
```

## git修改当前仓库的git地址

```shell
git remote set-url origin http://xxx/frontend/xxx.git
```
