FROM node:12-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./src/package.json ./src/package-lock.json ./
RUN npm install
