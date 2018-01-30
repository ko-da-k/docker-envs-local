.PHONY: build run new yarn serve docker/* 

BUILDER_IMAGE := angular-yarn-alpine-dev
BUILDER_WORK_DIR := /root/app
BUILDER_APP_NAME := app
BUILDER_CMD := docker run --rm -it -v $(CURDIR)/$(BUILDER_APP_NAME)/$(BUILDER_APP):$(BUILDER_WORK_DIR) -w $(BUILDER_WORK_DIR) -p 4200:4200 $(BUILDER_IMAGE)

setup:
	docker build -f Dockerfile.front.dev -t $(BUILDER_IMAGE) .

rebuild-image:
	docker rmi $(BUILDER_IMAGE)
	docker build -f Dockerfile.front.dev -t $(BUILDER_IMAGE) .

new:
	docker run --rm -v $(CURDIR):$(BUILDER_WORK_DIR) -w $(BUILDER_WORK_DIR) $(BUILDER_IMAGE) ng new $(BUILDER_APP_NAME) --routing

yarn:
	$(BUILDER_CMD) yarn

serve:
	$(BUILDER_CMD) ng serve --host 0.0.0.0 --poll 2000

attach:
	$(BUILDER_CMD) sh