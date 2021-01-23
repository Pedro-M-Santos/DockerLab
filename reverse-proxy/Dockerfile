FROM nginx:1.19-alpine

RUN apk update

RUN apk add --no-cache iputils

RUN apk add curl


COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html
