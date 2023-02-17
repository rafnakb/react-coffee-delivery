import { Product } from "./Product";

export function Products() {
  return (
    <Product />
  );
}

const PRODUCTS = [
  {
    id: 1,
    filter: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9
  }
]