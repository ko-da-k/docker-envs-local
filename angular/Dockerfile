FROM node:8-alpine

MAINTAINER K.Kato

RUN apk update \
    # && apk add --no-cache --update alpine-sdk build-base python yarn \
    && yarn cache clean \
    # && yarn global add @angular/cli@1.4.9 \
    && yarn global add @angular/cli \
    && ng set --global packageManager=yarn \
    # && apk del alpine-sdk \
    && rm -rf /tmp/* *.tar.gz ~/.npm \
    && yarn cache clean \
    && adduser -D appuser

COPY --chown=appuser:appuser project /home/appuser/app
ENV HOME=/home/appuser
USER appuser
WORKDIR ${HOME}/app
CMD [ "yarn && ng serve --host 0.0.0.0" ]
