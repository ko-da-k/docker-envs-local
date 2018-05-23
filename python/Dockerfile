FROM python:3.6

MAINTAINER K.Kato

RUN apt-get update \
    && apt-get install -y screen vim \
    && pip3 install --upgrade pip \
    && pip3 install --upgrade \
        jupyter \ 
        jupyterlab \
        pandas \
        matplotlib \
        seaborn \
        scikit-learn \
        jupyter_nbextensions_configurator \
        jupyterthemes \
        fbprophet \
        lightgbm \
        pandas_profiling \
        hyperopt \
    ## Install tensorflow later because of dependencies.
    && pip3 install --upgrade tensorflow \ 
    && jupyter nbextensions_configurator enable --user \
    && git clone https://github.com/lambdalisue/jupyter-vim-binding $(jupyter --data-dir)/nbextensions/vim_binding \
    && useradd analyst

USER analyst

RUN jupyter notebook --generate-config

COPY --chown=analyst:analyst jupyter_notebook_config.py $HOME/.jupyter/jupyter_notebook_config.py

WORKDIR $HOME/workspace