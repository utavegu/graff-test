import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import ProductsController from './controllers/products.controller';
import {
  clientPort,
  dbLogin,
  dbName,
  dbPassword,
  mongoDbConnectionUrl,
  serverPort,
} from './config';

const app = express();

app
  .use(json())
  .use(cors({ origin: `http://localhost:${clientPort}` }))
  .use('/api/products', ProductsController);

const start = async () => {
  try {
    mongoose.connection
      .on('error', (err: Error) => {
        console.error(err);
      })
      .on('connected', () => {
        console.log(`Подключение к базе данных ${dbName} произведено успешно!`);
      });

    await mongoose.connect(mongoDbConnectionUrl, {
      user: dbLogin,
      pass: dbPassword,
      dbName: dbName,
    });
    app.listen(serverPort, () => {
      console.log(`Сервер слушает на ${serverPort} порту!`);
    });
  } catch (error) {
    console.error(String(error));
  }
};

start().catch((error) => console.error(error));
