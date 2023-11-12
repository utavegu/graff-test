export interface IProduct {
  id: number;
  name: string;
  price: number;
  image?: string;
  colors: string[];
  popularity: number;
  desc?: string;
}
