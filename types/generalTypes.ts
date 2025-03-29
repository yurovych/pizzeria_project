export interface PizzaType {
  _id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  price: number;
}

export enum Routes {
  HOME = '/',
  MENU = '/menu',
  ABOUT_US = '/about-us',
  CONTACTS = '/contacts',
  BASKET = '/basket',
}