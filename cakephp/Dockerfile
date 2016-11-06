FROM ubuntu:latest

RUN apt-get update \
    && apt-get install -y \
        composer \
        curl \
        php \
        php-intl \
        php-mbstring \
        php-mysql \
        unzip \
        zip\
    && mkdir /code

WORKDIR /code
ADD . /code/

