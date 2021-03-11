FROM node:14.16.0-alpine3.12

RUN apk add --update curl

# For build with no dev dependency
ENV NODE_ENV production

RUN apk update \
    && apk add curl \
    && mkdir -p /usr/src/app

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install express redis pino

USER nobody
CMD [ "node", "app.js" ]