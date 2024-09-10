# 拉取镜像 node:20.11.1-slim 这个比较小 而且用apt 包管理
FROM node:20.11.1-slim

# pm2 用于进程管理
RUN npm install pm2 -g
# 工作文件夹  根目录下 生成/app
WORKDIR /app
# 复制package
COPY package.json /app/package.json
# 下载依赖
RUN npm install
# 复制 整体文件夹
COPY . .



EXPOSE 5566

CMD npm start