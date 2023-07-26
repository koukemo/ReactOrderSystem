FROM node:18.17.0-alpine

RUN npm install -g axios

WORKDIR /usr/src/app

EXPOSE 3000