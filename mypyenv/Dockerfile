FROM kyobad/anaconda3-alpine

MAINTAINER K.Kato

RUN conda install -y seaborn psycopg2 networkx\
&& pip install chainer \
&& conda install -y -c https://conda.anaconda.org/andrewannex spiceypy

WORKDIR /root/notebook

CMD ["/bin/sh", "-c", "jupyter notebook --no-browser --port=8888 --ip=0.0.0.0"]
