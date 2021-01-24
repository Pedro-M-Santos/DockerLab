FROM nginx:1.19-alpine

#update
RUN apk update

#install PING
RUN apk add --no-cache iputils

#install CURL para testar REQUISICOES
RUN apk add curl

#copy static file to root location
# COPY index.html /usr/share/nginx/html
