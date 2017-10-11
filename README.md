# local-docker-envs
This repository contains my local docker images
DBの永続化はvolumeコマンドを使う

``docker volume create --name hogehoge``

## mypyenv-alpine
- This Dockerfile is my python environment based on kyobad/anaconda3-alpine.
- docker-compose command builds jupyter notebook and postgresql containers.

#### HOW TO
``docker-compose up``

and access

``localhost:8888``

## datascience-conda
- These Dockerfiles are python environment including Mecab.
- Dockerfile
  - is based on debian:latest and Anaconda3
- Dockerfile.miniconda
  - is based on debian:latest and Miniconda3
- Dockerfile.continuum.anaconda
  - is based on continuumio/anaconda3:latest
- Dockerfile.continuum.miniconda
  - is based on continuumio/miniconda3:latest

#### HOW TO
``docker build -f <filepath> . -t <tag>``

## cakephp
cakephp and mysql
ref:http://zashikiro.hateblo.jp/entry/2016/08/15/224612

#### HOW TO
``docker-compose up``

and access

``localhost:8765``

## redmine
redmine server

#### HOW TO
``docker-compose up``

and access

``localhost:8080``

## django
django is a Web Framework

### HOW TO
#### make project
``docker-compose run django django-admin startproject projectname .``
#### run server
``docker-compose up``

and access

``localhost:5000``

## wordpress
WordPress is an online, open source website creation tool written in PHP.

### HOW TO
#### make project
``docker-compose run web composer create-project --prefer-dist -n cakephp/app app``
#### run server
``docker-compose up``

and access

``localhost:8765``

## osm
Open Street Map sample and postgis db
