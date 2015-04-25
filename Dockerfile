FROM japanvik/nodejs
MAINTAINER Gagan Preet Singh "s.gagan.preet@gmail.com"

RUN sudo apt-get install -y build-essential
RUN npm update

RUN npm install -g grunt

ADD ./code

WORKDIR /code

RUN npm install

CMD node app.js
