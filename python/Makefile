.PHONY: build run docker/*

WORK_DIR := $(CURDIR)

BUILDER_IMAGE := python:kodai
BUILDER_WORK_DIR := /root
BUILDER_CMD := docker run --rm -it $(WORK_DIR)/:$(BUILDER_WORK_DIR) -w $(BUILDER_WORK_DIR) -p 6006:6006 -p 8888:8888 $(BUILDER_IMAGE) bash

build:
	docker build -t $(BUILDER_IMAGE) .

rebuild:
	docker rmi $(BUILDER_IMAGE) .
	docker build -t $(BUILDER_IMAGE) .

run:
	$(BUILDER_CMD)