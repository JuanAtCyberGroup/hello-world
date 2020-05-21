FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . /user/src/app

CMD "npm run start"