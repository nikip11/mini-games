FROM node:14.18.3-alpine3.15 AS development
ENV NODE_ENV development

RUN set -xe \
    && apk add --update

WORKDIR /app
CMD [ "yarn", "start" ]
