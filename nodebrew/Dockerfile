FROM debian:latest

MAINTAINER K.Kato

RUN /bin/bash -c '\
    useradd --user-group --create-home --shell /bin/bash appuser \
    && apt-get update \
    && apt-get install -y curl \
    && su - appuser \
    && curl -L git.io/nodebrew | perl - setup \
    && echo "export PATH=$HOME/.nodebrew/current/bin:$PATH" >> ~/.bashrc \
    && source ~/.bashrc \
    && nodebrew install-binary v8.8.1 \
    && nodebrew use v8.8.1 \
    && npm i -g npm@5.5.1 \
    '

ENV HOME=/home/appuser
USER appuser
WORKDIR ${HOME}/app