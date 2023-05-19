FROM node:latest as build 

WORKDIR /app

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