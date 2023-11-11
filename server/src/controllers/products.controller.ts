import express from 'express';
import { productsService } from '../services/products.service';

// TODO: Валидация

const router = express.Router();

router.get('', async (_, responce) => {
  try {
    const products = await productsService.fetchProducts();
    responce.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    responce.status(404).json({
      success: false,
      message: 'Ошибка получения товаров',
    });
  }
});

router.get('/:id', async (request, responce) => {
  try {
    const { id } = request.params;
    const product = await productsService.fetchTargetProduct(id);
    if (!product) {
      throw new Error();
    }
    responce.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    responce.status(404).json({
      success: false,
      message: 'Такой товар не найден!',
    });
  }
});

export default router;
