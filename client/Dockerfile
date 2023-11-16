FROM node:20.9.0-alpine3.18

WORKDIR /client

EXPOSE 8000

COPY package*.json ./

RUN npm i --silent

COPY . ./

CMD [ "npm", "run", "dev" ]
