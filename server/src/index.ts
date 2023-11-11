import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

import ProductsController from './controllers/products.controller';

// TODO: Надо ли что-то пошаманить с корсом? Если успеешь прикрутить контейнеры, локалхост туда клиентский
// TODO: Найди у преттиера это правило и выключи
// eslint-disable-next-line newline-per-chained-call
app.use(json()).use(cors()).use('/api/products', ProductsController);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
