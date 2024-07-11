## 安装

```shell script
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

deb [arch=arm64] https://mirrors.aliyun.com/docker-ce/linux/debian buster stable" > /etc/apt/sources.list.d/docker.list
```

## 加速器

```shell script
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
sudo systemctl enable docker
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://2r522sjx.mirror.aliyuncs.com"],
  "log-driver":"json-file",
  "log-opts": {"max-size":"1024m"}
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker

```

## 迁移方案

两种方法迁移 Docker 的默认安装(存储)目录
如果是通过 Ubuntu 的 apt-get 安装的 Docker，默认的安装目录应该是：/var/lib/docker。

为了完全确定，可以使用以下的命令查询真正的安装路径：

```
sudo docker info | grep "Docker Root Dir"
```

前置工作
下文以 /store/software/docker 这个路径作为要迁移的新 Docker 安装(存储)目录

在开始迁移之前，首先复制原 Docker 安装(存储)目录到新的路径下：

```
cp -a /var/lib/docker /store/software/
```

然后备份原目录数据：

```
mv -u /var/lib/docker /var/lib/docker.bak
```

### 方法一：软链接

通过把 Docker 的原安装(存储)目录移动到自定义的其他路径下，然后在原位置下建立软链接是最简单快捷的方式。

首先，关停 Docker 服务：

```
sudo systemctl stop docker
# or
sudo service docker stop
```

接着，新建一个 /var/lib/docker 的软链：

```
sudo ln -fs /store/software/docker /var/lib/docker
```

最后，重启 Docker 服务：

```
sudo systemctl start docker
# or
sudo service docker start
```

启动 Docker 之后，以后你 pull image 和 run container，Docker 写入的路径依然是 /var/lib/docker，但是因为软链的设置，实际已经是往新的目录写入了。至此，完成了 Docker 安装(存储)
目录的迁移。

### 方法二：直接修改 Docker 配置文件

Docker 版本 < v17.05.0
因为 dockerd 运行 Docker 服务的时候可以通过参数 graph 指定镜像和容器存放路径，比如：–graph=/var/lib/docker，我们只需要修改配置文件指定启动参数即可。

Docker 的配置文件可以设置大部分的后台进程参数，在各个操作系统中的存放位置不一致，在 Ubuntu 中的位置是：/etc/default/docker，在 CentOS 中的位置是：/etc/sysconfig/docker。

* 如果是 CentOS 则添加下面这行：
  OPTIONS=--graph="/store/software/docker" --selinux-enabled -H fd://

* 如果是 Ubuntu 则添加下面这行（因为 Ubuntu 默认没开启 selinux）：
  OPTIONS=--graph="/store/software/docker" -H fd://
* 或者
  DOCKER_OPTS="-g /store/software/docker"
  Docker 版本 >= v17.05.0
  因为 Docker 官方在这个发行版本就 deprecated 了 graph 这个 feature，所以如果你机器上安装的 Docker 版本 >= v17.05.0，则无法通过在 /etc/default/docker
  配置文件中指定 graph 参数来修改 Docker 的默认安装(存储)目录了，具体参见官网文档：Docker Docs。

好在天无绝人之路，新版本的 Docker 还有其他方式可以达到我们修改安装(存储)目录的目的：通过修改(新建)/etc/docker/daemon.json，指定 data-root 参数的值。

按如下操作：

```
vim /etc/docker/daemon.json
```

加入

```
{
    "data-root": "/store/software/docker",
    "storage-driver": "overlay2" # 这个是 Docker 是默认设置，这里也可以不用加
}
```

重启 Docker & 清理原安装(存储)目录
最后，重启 Docker 服务：

```
sudo systemctl restart docker
# or
sudo service docker restart
```

通过上述任一方法完成迁移之后，在确认 Docker 能正常工作之后，删除备份的原目录数据：

```shell script
rm -rf /var/lib/docker.bak
```

### 迁移方案参考链接

https://ld246.com/article/1566017283738

## docker镜像的导入导出

一、使用 export 和 import
1，查看本机的容器
这两个命令是通过容器来导入、导出镜像。首先我们使用 docker ps -a 命令查看本机所有的容器。

2，导出镜像
（1）使用 docker export 命令根据容器 ID 将镜像导出成一个文件。

```shell
docker export f299f501774c > hangger_server.tar

```

（2）上面命令执行后，可以看到文件已经保存到当前的 docker 终端目录下。

3，导入镜像
（1）使用 docker import 命令则可将这个镜像文件导入进来。

```shell
docker import - new_hangger_server < hangger_server.tar
```

（2）执行 docker images 命令可以看到镜像确实已经导入进来了。

二、使用 save 和 load

1，查看本机的容器
这两个命令是通过镜像来保存、加载镜像文件的。首先我们使用 docker images 命令查看本机所有的镜像。

2，保存镜像

（1）下面使用 docker save 命令根据 ID 将镜像保存成一个文件。

```shell
docker save 0fdf2b4c26d3 > hangge_server.tar
```

（2）我们还可以同时将多个 image 打包成一个文件，比如下面将镜像库中的 postgres 和 mongo 打包：

```shell
docker save -o images.tar postgres:9.6 mongo:3.4

```

3，载入镜像
使用 docker load 命令则可将这个镜像文件载入进来。

```shell
docker load < hangge_server.tar

```

附：两种方案的差别
特别注意：两种方法不可混用。
如果使用 import 导入 save 产生的文件，虽然导入不提示错误，但是启动容器时会提示失败，会出现类似"docker: Error response from daemon: Container command not found
or does not exist"的错误。

1，文件大小不同

export 导出的镜像文件体积小于 save 保存的镜像

是否可以对镜像重命名

```shell
docker import 可以为镜像指定新名称
docker load 不能对载入的镜像重命名
```

3，是否可以同时将多个镜像打包到一个文件中

```shell
docker export 不支持
docker save 支持
```

4，是否包含镜像历史

export 导出（import 导入）是根据容器拿到的镜像，再导入时会丢失镜像所有的历史记录和元数据信息（即仅保存容器当时的快照状态），所以无法进行回滚操作。
而 save 保存（load 加载）的镜像，没有丢失镜像的历史，可以回滚到之前的层（layer）。

5，应用场景不同

docker export 的应用场景：

> 主要用来制作基础镜像，比如我们从一个 ubuntu 镜像启动一个容器，然后安装一些软件和进行一些设置后，使用 docker export 保存为一个基础镜像。然后，把这个镜像分发给其他人使用，比如作为基础的开发环境。

docker save 的应用场景：
> 如果我们的应用是使用 docker-compose.yml 编排的多个镜像组合，但我们要部署的客户服务器并不能连外网。这时就
