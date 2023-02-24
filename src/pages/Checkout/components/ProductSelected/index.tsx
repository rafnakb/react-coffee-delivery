import { Trash } from "phosphor-react";
import { IconTextButton } from "../../../../components/TrashButton";
import { ProductCounter } from "../../../../components/ProductCounter";
import { ConfirmButton, Divider, ItemFromOrderContainer, PricesInfoContainer, ProductsSelectedContainer } from "./styles";

export function Products() {
  return (
    <ProductsSelectedContainer>
      <ItemFromOrderContainer>
        <div className="content">
          <img src="src/assets/products/expresso-tradicional.svg" alt="" />
          <div className="item">
            <p>Expresso Tradicional</p>
            <div className="buttons">
              <ProductCounter />
              <IconTextButton />
            </div>
          </div>
        </div>
        <span className="price">R$ 9,90</span>
      </ItemFromOrderContainer>
      {true && (<Divider />)}
      <ItemFromOrderContainer>
        <div className="content">
          <img src="src/assets/products/latte.svg" alt="" />
          <div className="item">
            <p>Expresso Tradicional</p>
            <div className="buttons">
              <ProductCounter />
              <IconTextButton />
            </div>
          </div>
        </div>
        <span className="price">R$ 19,90</span>
      </ItemFromOrderContainer>
      {true && (<Divider />)}
      <PricesInfoContainer>
        <div className="orderInfo">
          Total de itens
          <p>R$ 29,70</p>
        </div>
        <div className="orderInfo">
          Entrega
          <p>R$ 3,50</p>
        </div>
        <div className="total">
          Total
          <p>R$ 33,20</p>
        </div>
      </PricesInfoContainer>
      <ConfirmButton>
        CONFIRMAR PEDIDO
      </ConfirmButton>
    </ProductsSelectedContainer>
  );
}