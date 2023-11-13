import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { IProduct } from '../typespaces/interfaces/products';

class BasketSlice {
  basket = [] as IProduct[];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'BasketPersistStore',
      properties: ['basket'],
      storage: window.localStorage,
    });
  }

  setBasket(products: IProduct[]) {
    this.basket = products;
  }
}

const basketSlice = new BasketSlice();
export { basketSlice };
