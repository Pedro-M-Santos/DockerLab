FROM node

WORKDIR /usr/src/app
#Update
RUN apt-get update
#install Ping
RUN apt install iputils-ping -y

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "server.js"]