FROM node:9-alpine

MAINTAINER K.Kato

RUN apk update \
    && apk add --no-cache --update alpine-sdk \
    && npm install -g @angular/cli@1.4.9 \
    && ng set --global packageManager=npm \
    && apk del alpine-sdk \
    && rm -rf /tmp/* *.tar.gz ~/.npm \
    && npm cache clear --force \
    && adduser -D appuser

COPY --chown=appuser:appuser project /home/appuser/app
ENV HOME=/home/appuser
USER appuser
WORKDIR ${HOME}/app
CMD [ "npm install && ng serve" ]