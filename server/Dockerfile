FROM node:20.9.0-alpine3.18

WORKDIR /server

COPY package*.json ./
COPY tsconfig.json ./
COPY src/ ./src

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
