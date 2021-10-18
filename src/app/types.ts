export type TButtonColor =
  | 'default'
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning';
export type TButtonSize = 'default' | 'large' | 'small';
export type TTrigger = 'hover' | 'click';
export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  discount: number;
};
export type TItemInCart = { count: number; product: TProduct };
export type TToggleButton = { value: string; label: string };

export enum ProductProperties {
  all = 'all',
  inStock = 'inStock',
  withDiscount = 'withDiscount',
}
