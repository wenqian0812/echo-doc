## elasticdump

## install

不同的es使用不同的`elasticdump`版本

```shell
npm install -g elasticdump
```

### 迁移命令

```shell
NODE_TLS_REJECT_UNAUTHORIZED=0 ./elasticdump --input=./索引名_settings.json --output="https://用户名:密码@ip:端口/索引名" --tlsAuth --type=settings
NODE_TLS_REJECT_UNAUTHORIZED=0 ./elasticdump --input=./索引名_mapping.json --output="https://用户名:密码@ip:端口/索引名" --tlsAuth --type=mapping
NODE_TLS_REJECT_UNAUTHORIZED=0 ./elasticdump --input=./索引名_data.json --output="https://用户名:密码@ip:端口/索引名" --tlsAuth --type=data --limit 10000
```
