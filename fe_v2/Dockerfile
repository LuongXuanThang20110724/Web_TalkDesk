FROM node:lts-alpine as build 

WORKDIR /app

COPY package.json .
RUN npm install 
COPY . .
RUN npm run build
ARG REACT_APP_API
ENV REACT_APP_API=$REACT_APP_API

FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 
COPY --from=build /app/build /usr/share/nginx/html 