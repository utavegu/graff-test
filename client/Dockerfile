FROM node:20.9.0-alpine3.18

WORKDIR /client

COPY package*.json tsconfig.json tsconfig.node.json vite.config.ts index.html ./

RUN npm i

COPY src/ ./src

EXPOSE 8000

CMD [ "npm", "run", "dev" ]
