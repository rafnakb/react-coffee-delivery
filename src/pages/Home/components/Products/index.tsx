import { Product } from "./Product";
import { FilterBox, ProductsContainer } from "./styles";

export function Products() {
  return (
    <ProductsContainer>
      <header>
        <p>Nossos cafés</p>
        <div>
          <FilterBox>TRADICIONAL</FilterBox>
          <FilterBox>ESPECIAL</FilterBox>
          <FilterBox>COM LEITE</FilterBox>
          <FilterBox>ALCOÓLICO</FilterBox>
          <FilterBox>GELADO</FilterBox>
        </div>
      </header>
      <Product />
    </ProductsContainer>
  );
}

const PRODUCTS = [
  {
    id: 1,
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: 'src/assets/products/expresso-tradicional.svg'
  }
]