# git 使用流程

1. `git add xxx`: 添加更新

2. `git commit -m 'xxx'`: 添加信息[feat, fix, chore, refactory, update]

`git commit -m 'feat: add new grpc method: ListUser'`  
`git commit -m 'fix: #9119 (用户列表没有用户状态)'`  
`git commit -m 'chore: .gitlab-ci.yml use new builder tag'`  
`git commit -m 'refactory: grpc method ListUser'`  
`git commit -m 'update: grpc method ListUser add cache'`

3. `git push origin HEAD:dev-xxx`

4. 在 gitlab 上发起合并请求

5. 等待合并或者需要修改代码

- 若需修改代码, 修改完成后:

`git rebase -i HEAD~2`: 合并修改的 commit 信息  
`git push origin HEAD:dev-xxx -f`: 重新推送代码到 gitlab  
`再次发起合并请求`

- 代码合并后(例如合并至 dev 分支):

`git branch -D dev-xxx`  
`git fetch origin dev`  
`git checkout -b dev-xxx origin/dev`  
`继续`

6. hotfix

`git fetch origin --tags`

`git checkout -b hotfix-v1.3.4 tags/v1.3.4`

修改代码

`git push origin HEAD:hotfix-v1.3.4`

7. 过滤大文件 (当你不小心提交了大文件时)

一旦提交（commit）了大文件, rebase 也无法从 git 中剔出提交

建议直接使用 [git filter repo](https://github.com/newren/git-filter-repo)
