## Build
FROM node:lts as base
WORKDIR /home/node/app
COPY --chown=node:node . /home/node/app/
RUN yarn
RUN yarn build

## Deploy
FROM nginx:stable-alpine as deploy
WORKDIR /home/node/app
COPY --chown=node:node --from=base /home/node/app/dist /usr/share/nginx/html/
