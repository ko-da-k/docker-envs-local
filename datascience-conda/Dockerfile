FROM debian:latest

MAINTAINER K.Kato

ENV ANACONDA_VERSION=5.0.0 \
    PATH=/opt/conda/bin:$PATH

# Install Anaconda and Mecab
RUN apt-get update --fix-missing && \
    apt-get install -y aptitude build-essential && \
    aptitude install -y mecab libmecab-dev mecab-ipadic-utf8 git make curl xz-utils file wget && \
    wget -q --no-check-certificate https://repo.continuum.io/archive/Anaconda3-${ANACONDA_VERSION}-Linux-x86_64.sh -O /tmp/anaconda.sh && \
    /bin/bash /tmp/anaconda.sh -b -p /opt/conda && \
    rm -rf /root/.continuum /opt/conda/pkgs/* && \
    rm /tmp/anaconda.sh && \
    git clone --depth 1 https://github.com/neologd/mecab-ipadic-neologd.git /tmp/mecab-ipadic-neologd && \
    echo `mecab-config --dicdir` | xargs mkdir -p && \
    cd /tmp/mecab-ipadic-neologd && \
    ./bin/install-mecab-ipadic-neologd -n -y && \
    cd / && \
    rm -rf /tmp/mecab-ipadic-neologd && \
    conda update -y --all && \
    conda install -y tensorflow && \
    pip install mecab-python3

WORKDIR /root/workspace

CMD [ "/bin/bash", "-c", "jupyter notebook --notebook-dir=/root/workspace --ip='*' --port=8888 --no-browser  --allow-root" ]