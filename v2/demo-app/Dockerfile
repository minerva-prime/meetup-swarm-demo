FROM node:8.1.4 

# For build with no dev dependency
ENV NODE_ENV production

RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install express redis

USER nobody
CMD [ "node", "app.js" ]