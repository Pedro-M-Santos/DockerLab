FROM node

WORKDIR /usr/src/app

RUN apt-get update
RUN apt install iputils-ping -y

COPY package*.json ./

RUN npm install

# EXPOSE 3000

COPY . .

CMD [ "node", "server.js"]