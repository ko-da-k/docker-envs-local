FROM kyobad/miniconda3-alpine:latest

MAINTAINER K.Kato

RUN conda install -y django psycopg2 \
    && adduser -D worker

USER worker

WORKDIR /home/worker/

CMD ["/bin/sh"]
