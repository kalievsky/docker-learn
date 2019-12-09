FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./src/package.json ./src/package-lock.json ./

RUN if [ "$NODE_ENV" = "development" ]; \
	then npm install;  \
	else npm install --only=production; \
	fi
