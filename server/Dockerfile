FROM node:18.17.0-alpine

WORKDIR /usr/src/app

RUN apk update && \
    npm install -g npm && \
    npm install -g express && \
    npm install -g cors && \
    npm install -g sqlite3

ENV NODE_PATH=/usr/local/lib/node_modules

EXPOSE 5000

CMD ["node", "server.js"]