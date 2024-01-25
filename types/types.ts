export interface Item {
  img: string;
  id: string;
  name: string;
  price: number;
  additionalInfo?: string[];
}
export interface CartItem extends Item {
  totalPrice: number;
  quantity: number;
}
export interface ItemAPI {
  id: string;
  quantity: number;
}
export interface CatalogueItem extends Item {
  priceMax: number;
  priceEUR: number;
  priceEURMax: number;
  description: string;
}
