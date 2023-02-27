import { IconTextButton } from "../../../../components/TrashButton";
import { ProductCounter } from "../../../../components/ProductCounter";
import { ConfirmButton, Divider, ItemFromOrderContainer, PricesInfoContainer, ProductsSelectedContainer } from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

export function Products() {
  const {
    PRODUCTS,
    orders
  } = useContext(OrderContext);

  const isEmptyOrder = orders.length === 0;

  return (
    <ProductsSelectedContainer>

      {isEmptyOrder ?
        (
          <p className="empty">Nenhum pedido adicionado</p>
        ) : (
          <>
            {orders.map(order => {
              PRODUCTS.find(item => {
                item.id === order.id
                return <ItemFromOrderContainer
                  key={item.id}
                >
                  <div className="content">
                    <img src={item.imageUrl} alt="" />
                    <div className="item">
                      <p>{item.name}</p>
                      <div className="buttons">
                        <ProductCounter />
                        <IconTextButton />
                      </div>
                    </div>
                  </div>
                  <span className="price">{
                    (order.quantity * item.price).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}</span>
                </ItemFromOrderContainer>
              })
            })}

            {!isEmptyOrder && (<Divider />)}

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
          </>
        )
      }

    </ProductsSelectedContainer>
  );
}