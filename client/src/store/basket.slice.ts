import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { IProduct } from '../typespaces/interfaces/IProduct';

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

  pushProductInBasket(product: IProduct) {
    this.basket.push(product);
  }
}

const basketSlice = new BasketSlice();
export { basketSlice };
