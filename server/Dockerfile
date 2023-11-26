FROM node:20.9.0-alpine3.18

WORKDIR /server

COPY package*.json tsconfig.json ./

RUN npm i

COPY src/ ./src

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
