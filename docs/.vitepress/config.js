export default {
  title: "Echo",
  description: "echo的程序笔记",
  base: '/echo-doc/',
  themeConfig: {
    nav: [
      {
        text: "front",
        items: [
          {text: "代码规范", link: "/web/lint/index"},
          {text: "示例代码", link: "/web/code/js/center"},
          {text: "面试题", link: "/web/question/readme"}
        ],
      },
      {text: "ubuntu", link: "/ubuntu/readme"},
      {text: "centos", link: "/centos/readme"},
      {
        text: "windows", link: '/windows/readme'
      },

      {text: "docker", link: "/docker/readme"},
      {text: "git", link: "/git/readme"},
      {text: "other", link: "/other/readme"},
      {text: "elasticsearch", link: "/elasticsearch/readme"},
      {text: "database", link: "/database/readme"},
    ],
    sidebar: {
      web: [
        {
          text: "代码规范",
          items: [
            {text: "vue", link: "/web/lint/vue"},
            {text: "html", link: "/web/lint/html"},
            {text: "javascript", link: "/web/lint/javascript"},
            {text: "css", link: "/web/lint/css"},
          ],
        },
        {
          text: '代码示例 - JS',
          items: [
            {text: "公共", link: "/web/code/js/common"},
            {text: "图片截图指定区域", link: "/web/code/js/div-screenshot"},
            {text: "居中方案", link: "/web/code/js/center"},
            {text: "一维数组、树结构相互转换", link: "/web/code/js/flat-array-to-tree"},
          ]
        },
        {
          text: '面试题',
          items: [
            {text: "css", link: "/web/question/css"},
            {text: "js", link: "/web/question/js"},
            {text: "vue", link: "/web/question/vue"},
            {text: "html", link: "/web/question/html"},
          ]
        }
      ],
      git: [
        {
          text: "git",
          items: [
            {text: "总览", link: "/git/readme"},
            {text: "工作流程", link: "/git/git_flow"},
            {text: "branch", link: "/git/branch"},
            {text: "迁移", link: "/git/migration"},
            {text: "gitignore", link: "/git/gitignore"},
            {text: "tag", link: "/git/tag"},
            {text: "rebase", link: "/git/rebase"}
          ],
        },
      ],
      ubuntu: [
        {
          text: "ubuntu",
          items: [
            {text: "清除痕迹", link: "/ubuntu/clear-history"},
            {text: "ubuntu18.04 安装python3.8", link: "/ubuntu/ubuntu18.04-python3.8"},
          ],
        },
      ],
      centos: [
        {
          text: "centos",
          items: [
            {text: "centos7.6-kong", link: "/centos/centos7.6-kong"},
            {text: "centos7.6-nginx1.12", link: "/centos/centos7.6-nginx1.12"},
          ],
        },
      ],
      windows: [
        {
          text: "windows",
          items: [
            {text: "close port", link: "/windows/win10-close-port"},
          ],
        },
      ],
      docker: [
        {
          text: "docker",
          items: [
            {text: "overview", link: "/docker/readme"},
            {text: "install", link: "/docker/install"},
            {text: "docker-compose", link: "/docker/docker-compose"},
            {text: "gitlab", link: "/docker/gitlab"},
            {text: "mysql", link: "/docker/mysql"},
            {text: "rabbitmq", link: "/docker/rabbitmq"},
            {text: "redis", link: "/docker/redis"},
          ],
        },
      ],
      other: [
        {
          text: "杂谈",
          items: [
            {text: "overview", link: "/other/readme"},
            {text: "ansible", link: "/other/ansible"},
            {text: "ceph", link: "/other/ceph"},
            {text: "flink", link: "/other/flink"},
            {text: "jumpserver", link: "/other/jumpserver"},
            {text: "kafka", link: "/other/kafka"},
            {text: "linux-disk", link: "/other/linux-disk"},
            {text: "logstash", link: "/other/logstash"},
          ],
        },
      ],
      elasticsearch: [
        {
          text: 'elasticsearch',
          items: [
            {text: 'tls', link: '/elasticsearch/elasticsearch-tls'}
          ]
        },
        {
          text: 'elasticdump',
          items: [
            {text: '导出', link: '/elasticsearch/elasticdump'}
          ]
        },
        {
          text: 'kibana',
          items: []
        }
      ],
      database: [
        {
          text: 'todb',
          items: [
            {text: 'install', link: '/database/tidb/readme'}
          ]
        }
      ]
    },
  },
};
