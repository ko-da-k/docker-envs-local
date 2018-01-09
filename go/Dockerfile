FROM golang:1.9-alpine

MAINTAINER K.Kato

RUN apk add --virtual go-builddeps --no-cache make git \
    && go get -u github.com/golang/dep/cmd/dep