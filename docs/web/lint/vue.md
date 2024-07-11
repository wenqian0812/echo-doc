# vue 文件常用组件规范


## 推荐文件夹架构

```
project name
---- src 主代码文件
-------- api 接口请求
-------- assets css fonts img
-------- components 公有组件 采用全小写加短横线分割
-------- direction vue direction
-------- enum 枚举
-------- hooks
-------- icons
-------- layout 布局
-------- router 路由
-------- store 状态管理器
-------- themes 主题
-------- types 类型 ts 使用
-------- views 页面路由
------------ modules
---------------- pages
---------------- components
---- other file or folder
```

### 建议

1. 对全局试用的公有组件采用全小写加短横线分割 todo-list
2. 对页面内的组件采用大驼峰， 例如 TodoList
3. 对页面的路由短横线分割 info-entry
4. 对js css文件采用短横线分割 todo-list

## 方法命名

### 方法命名

`handleXXX`

### 事件处理方法

处理各种事件，`click mouseover change input` 等事件的处理方法，皆使用 handleXXX

```
handleProfileUpdate
handleFilterChange
handleMouseover
handleAvatarMouseover
handleNameClick
```

### 处理数据的方法

```
requestXXX 拉取数据的方法
api 或 vuex/actions 层使用 fetchXXX

vue 业务代码里面使用 requestXXX or fetchXXX

createXXX 创建数据的方法
updateXXX 更新数据的方法
removeXXX 删除数据的方法
formatXXX 格式化数据的方法
```

### 暴露方法给父组件调用

```
refXXX
```
