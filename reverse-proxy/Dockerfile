FROM nginx:1.19-alpine

#update
RUN apk update

#add ping tool
RUN apk add --no-cache iputils

#add curl to make requests
RUN apk add curl

#copy nginx.conf to configure routing aspects
COPY nginx/nginx.conf /etc/nginx/nginx.conf
