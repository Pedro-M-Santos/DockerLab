FROM nginx:1.19-alpine

RUN apk update

#install PING
RUN apk add --no-cache iputils

#install CURL para testar REQUISICOES
RUN apk add curl

COPY index.html /usr/share/nginx/html
