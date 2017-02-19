FROM node:latest

MAINTAINER alanmarcell.com.br

ENV NODE_ENV=production
ENV PORT=1000

COPY . /var/www
WORKDIR /var/www

VOLUME ["/var/www"]


RUN npm install 

EXPOSE $PORT

ENTRYPOINT ["npm","start"]
