export type TButtonColor =
  | 'default'
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning';
export type TButtonSize = 'default' | 'large' | 'small';
export type TTrigger = 'hover' | 'click';

export type TItemInCart = { count: number; product: TProduct };
export type TToggleButton = { value: string; label: string };

export enum ProductProperties {
  all = 'all',
  inStock = 'inStock',
  withDiscount = 'withDiscount',
}

export type TProductFromApi = {
  id: string;
  price: number;
  category: "smartphone"
  company: "Google"
  image: "https://avatars.mds.yandex.net/get-mpic/1545401/img_id3166910857140137379.jpeg/9hq"
  rating: 5
  title: "Pixel 4 XL 6/128GB"
};


export type TProduct = {
  inStock: boolean;
  discount: number;

  id: string;
  price: number;
  category: "smartphone"
  company: "Google"
  image: "https://avatars.mds.yandex.net/get-mpic/1545401/img_id3166910857140137379.jpeg/9hq"
  rating: 5
  title: "Pixel 4 XL 6/128GB"
};
