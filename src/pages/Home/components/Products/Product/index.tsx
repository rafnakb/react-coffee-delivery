import { ProductCard, TagBox } from "./styles";

export function Product() {
  return (
    <ProductCard>
      <img src="src/assets/products/expresso-tradicional.svg" alt="" />
      <TagBox>TRADICIONAL</TagBox>
      <p>Expresso Tradicional</p>
      <p> O tradicional café feito com água quente e grãos moídos</p>
      <div>
        <span>R$</span>9,90
      </div>
    </ProductCard>
  );
}