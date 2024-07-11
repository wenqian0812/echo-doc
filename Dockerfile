FROM node:latest AS builder

WORKDIR /build

COPY . .

RUN npm i --registry=https://registry.npmmirror.com
RUN npm run docs:build

FROM nginx:alpine

# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && apk add curl
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories && apk add curl

ENV TZ Asia/Shanghai

WORKDIR /app

COPY --from=builder /build/docs/.vitepress/dist /app/dist
COPY --from=builder /build/nginx.conf /etc/nginx/nginx.conf

# CMD ['nginx', '-s', 'reload']
