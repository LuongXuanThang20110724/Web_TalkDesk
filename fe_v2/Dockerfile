FROM amazonlinux:2 as build 

WORKDIR /app

# Cài đặt các gói phụ thuộc
RUN yum -y install curl
RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash -
RUN yum -y install nodejs

COPY package.json .
RUN npm install 
COPY . .
RUN npm run build


FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 
COPY --from=build /app/build /usr/share/nginx/html 

COPY update_env.sh /app/update_env.sh
COPY .env /app/.env

CMD sh -c "./update_env.sh && nginx -g 'daemon off;'"