FROM node:11.13.0-stretch-slim

# Ignore APT warnings about not having a TTY
LABEL maintainer="Stanley Yoshinori Takamatsu"

ENV DEBIAN_FRONTEND noninteractive
ENV HOME /home/node

RUN apt-get update && \
    apt-get install -y procps

RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mkdir -p /var/www 

RUN chown -R node\:node /var/www \
    && chown -R node\:node /usr/local \
    && chown -R node\:node /home/node 

RUN cd /home/node &&\
    echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc

RUN rm -rf /tmp/* \
    && rm -rf /var/www/*

COPY ./. /var/www/

RUN chown -R node\:node /var/www

USER node

ENV NPM_CONFIG_LOGLEVEL info
ENV TYPESCRIPT_VERSION 3.3.3333
ENV NPX_VERSION 10.2.0
ENV EXPO_VERSION 2.14.0

RUN npm i yarn -g \
    && yarn global add typescript@$TYPESCRIPT_VERSION \
    && yarn global add npx@$NPX_VERSION \
    && yarn global add expo-cli@$EXPO_VERSION 

WORKDIR /var/www/

ENTRYPOINT /bin/bash
