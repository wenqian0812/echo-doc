## 离线安装tidb7.5.1


### 下载TiDB离线组件包

```
wget https://download.pingcap.org/tidb-community-server-v7.5.1-linux-amd64.tar.gz

wget https://download.pingcap.org/tidb-community-toolkit-v7.5.1-linux-amd64.tar.gz
```

### 安装TiUP

将离线包发送到目标集群的中控机后，执行以下命令安装 TiUP 组件：

```
tar -zxvf tidb-community-server-v7.5.1-linux-amd64.tar.gz
cd tidb-community-server-v7.5.1-linux-amd64
```

sh local_install.sh  脚本的内容大致为 ：检查系统 ，架构 ，tar 命令是否存在 ，设置TiUP的环境变量 设置离线镜像等 
执行成功之后输出以下内容：

设置离线镜像为 /home/software/tidb-community-server-v7.5.1-linux-amd64

生效环境变量 source /root/.bash_profile 或者 从新开一个终端

TiUP的可执行命令在目录下 /root/.tiup/bin/tiup


```
sh local_install.sh
```


`local_install.sh` 脚本会自动执行 `tiup mirror set tidb-community-server-${version}-linux-amd64` 命令将当前镜像地址设置为 `tidb-community-server-${version}-linux-amd64`。

若需将镜像切换到其他目录，可以通过手动执行 `tiup mirror set <mirror-dir>` 进行切换。如果需要切换到在线环境，可执行`tiup mirror set https://tiup-mirrors.pingcap.com`

### 合并离线包
如果是通过官方下载页面下载的离线软件包，需要将 TiDB-community-server 软件包和 TiDB-community-toolkit 软件包合并到离线镜像中。执行以下命令合并离线组件到 server 目录下。

1.  解压组件包 

```
tar -xf tidb-community-toolkit-v7.5.1-linux-amd64.tar.gz
```
 
2. 查看目录

```
ls -ld tidb-community-server-v7.5.1-linux-amd64 tidb-community-toolkit-v7.5.1-linux-amd64

cp -rp keys ~/.tiup/
```
### 合并镜像包

```
tiup mirror merge ../tidb-community-toolkit-v7.5.1-linux-amd64
tiup mirror show
```

/home/software/tidb-community-server-v7.5.1-linux-amd64
 
```
which tiup
```

/root/.tiup/bin/tiup

4 TIDB 软件和硬件环境建议配置
TiDB 软件和硬件环境建议配置 | PingCAP 文档中心

5 TiDB环境与系统配置检查
TiDB 环境与系统配置检查 | PingCAP 文档中心

6 生成集群初始化配置文件模板 
执行如下命令，生成集群初始化配置文件：

# 生成在执行命令的目录下 
 ```
 tiup cluster template > topology.yaml
 ```
7 执行部署命令

1 检查就能存在的潜在风险

```
tiup cluster check tidb.yaml
```
2 手动修复风险
检测出来的风险都可以通过官方文档找到解决方案

例如 报错

10.79.23.47  limits          Fail    soft limit of 'nofile' for user 'tidb' is not set or too low
10.79.23.47  limits          Fail    hard limit of 'nofile' for user 'tidb' is not set or too low
10.79.23.47  limits          Fail    soft limit of 'stack' for user 'tidb' is not set or too low

解决

cat << EOF >>/etc/security/limits.conf
tidb           soft    nofile          1000000
tidb           hard    nofile          1000000
tidb           soft    stack          32768
tidb           hard    stack          32768
EOF

当检查没有fail时，

3 部署 TiDB 集群

```
tiup cluster deploy tidb-test v7.5.1  tidb.yaml
```

以上部署示例中：

tidb-test 为部署的集群名称。
v7.5.1 为部署的集群版本，可以通过执行 tiup list tidb 来查看 TiUP 支持的最新可用版本。
初始化配置文件为tidb.yaml。
--user root 表示通过 root 用户登录到目标主机完成集群部署，该用户需要有 ssh 到目标机器的权限，并且在目标机器有 sudo 权限。也可以用其他有 ssh 和 sudo 权限的用户完成部署。
[-i] 及 [-p] 为可选项，如果已经配置免密登录目标机，则不需填写。否则选择其一即可，[-i] 为可登录到目标机的 root 用户（或 --user 指定的其他用户）的私钥，也可使用 [-p] 交互式输入该用户的密码。
预期日志结尾输出 Deployed cluster `tidb-test` successfully 关键词，表示部署成功。

8 查看TIUP管理的集群情况
TiUP 支持管理多个 TiDB 集群，该命令会输出当前通过 TiUP cluster 管理的所有集群信息，包括集群名称、部署用户、版本、密钥信息等。

```
tiup cluster list
```

9 检查部署的 TiDB 集群情况
预期输出包括 tidb-test 集群中实例 ID、角色、主机、监听端口和状态（由于还未启动，所以状态为 Down/inactive）、目录信息。

```
 tiup cluster display tidb-test
```


10 启动集群

```
tiup cluster start tidb-test
```

停止

```
 tiup cluster stop tidb-test
```