FROM python2.7

ADD ./code

WORKDIR /code

RUN pip install -r requirements.txt

