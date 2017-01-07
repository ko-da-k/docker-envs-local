# localDockerImages
This repository contains my local docker images

## mypyenv
- This Dockerfile is my python environment based on kyobad/anaconda3-alpine.
- docker-compose command builds jupyter notebook and postgresql containers.

#### HOW TO
``docker-compose up``
``localhost:8888``

## cakephp
cakephp and mysql
ref:http://zashikiro.hateblo.jp/entry/2016/08/15/224612

#### HOW TO
``docker-compose up``
``localhost:8765``

## redmine
redmine server

#### HOW TO
``docker-compose up``
``localhost:8080``

## django
django is a Web Framework

### HOW TO
#### make project
``docker-compose run django django-admin startproject projectname ./app``
#### run server
``docker-compose up``
``localhost:5000``
