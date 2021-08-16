FROM node:16.6.2-stretch-slim

# For build with no dev dependency
ENV NODE_ENV production

RUN apt update \
    && apt install -y curl \
    && mkdir -p /usr/src/app

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install express redis pino

USER nobody
CMD [ "node", "app.js" ]