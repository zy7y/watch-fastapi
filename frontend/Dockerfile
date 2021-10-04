FROM node:14.16.1-alpine3.13
COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npmjs.org
RUN npm install yarn
# 安装依赖
RUN yarn

# 打包 - 目的：丢到nginx下跑
RUN yarn build

FROM nginx:1.15.2-alpine
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf