.PHONY: build run dep clean fmt docker/*

WORK_DIR := $(CURDIR)
APP_DIR := kyo-bad/app

BUILDER_IMAGE := go-builder:kodai
BUILDER_WORK_DIR := /go/src/github.com/$(APP_DIR)
BUILDER_CMD := docker run --rm -it -e GOPATH=/go -v $(WORK_DIR):$(BUILDER_WORK_DIR) -w $(BUILDER_WORK_DIR) -p 8080:8080 $(BUILDER_IMAGE)

MAIN := main

setup:
	docker build -t $(BUILDER_IMAGE) .

rebuild-image:
	docker rmi $(BUILDER_IMAGE)
	docker build -t $(BUILDER_IMAGE) .

attach:
	$(BUILDER_CMD) sh

run:
	$(BUILDER_CMD) run $(MAIN).go

fmt:
	$(BUILDER_CMD) go fmt ./...

dep:
	$(BUILDER_CMD) dep ensure

build-go:
	$(BUILDER_CMD) -rm $(MAIN) && go build $(MAIN).go