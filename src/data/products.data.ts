import {TProduct} from "src/app/types";

export const products: TProduct[] = [
  {
    id: '1',
    name: 'Пирожок',
    description: 'Вкусный пирожок',
    price: 100,
    inStock: true,
    discount: 0
  },
  {
    id: '2',
    name: 'Мухомор',
    description: 'Не вкусный мухомор',
    price: 10,
    inStock: true,
    discount: 0.10
  },
  {
    id: '3',
    name: 'Малина',
    description: 'Красная малина',
    price: 1000,
    inStock: true,
    discount: 0.23
  },
  {
    id: '4',
    name: 'Клубника',
    description: 'Гнилая клубника',
    price: 2,
    inStock: false,
    discount: 0
  },
  {
    id: '5',
    name: 'Картошка',
    description: 'Грязная картошка',
    price: 300,
    inStock: true,
    discount: 0.11
  },
  {
    id: '6',
    name: 'Морковка',
    description: 'Сладкая морковка',
    price: 563,
    inStock: false,
    discount: 0
  },
  {
    id: '7',
    name: 'Шашлык',
    description: 'Вегетарианский шашлык',
    price: 666,
    inStock: true,
    discount: 0.90
  },
  {
    id: '8',
    name: 'Тушенка',
    description: 'Армейская тушенка',
    price: 136,
    inStock: true,
    discount: 0.11
  },
  {
    id: '9',
    name: 'Яйца',
    description: 'Яйца куриные',
    price: 540,
    inStock: true,
    discount: 0
  },
  {
    id: '0',
    name: 'Молоко',
    description: 'Сернурское молоко',
    price: 3722,
    inStock: false,
    discount: 0
  },
]