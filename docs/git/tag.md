## tag相关

1、在本地为当前最新提交的代码打上标签
```shell
git tag -a v1.1 -m '版本介绍'
```
2、推送标签到远程服务器上
```shell
git push origin v1.1
```
3、查看标签

查看所有标签：
```shell
  git tag
```
按照关键字查看，其中 v1.* 就是类似模糊匹配的关键字：

```shell
git tag -l "v1.*"
```
4、为早期的提交补打标签
先查看日志

```shell
git log --pretty=oneline
```

可能会遇到中文无法识别的问题，如下图所示的乱码：
可以执行如下命令解决：
```
git config --global i18n.commitencoding utf-8  --该命令表示：提交命令的时候使用utf-8编码集提交

git config --global i18n.logoutputencoding utf-8 --该命令表示：日志输出时使用utf-8编码集显示

set LESSCHARSET=utf-8  --设置LESS字符集为utf-8
```

指定的提交ID上补打标签v1.0，3628164为提交ID前几位或完整ID都可以：

```shell
git tag -a v1.0 -m "版本介绍" dele264
```

5、删除标签

```shell
git tag -d <tagname>

git push origin --delete tag
```
