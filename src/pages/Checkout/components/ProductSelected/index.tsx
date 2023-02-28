import { ProductCounter } from "../../../../components/ProductCounter";
import { ActionButton, Divider, ItemFromOrderContainer, PricesInfoContainer, ProductsSelectedContainer, TrashButtonContainer } from "./styles";
import React, { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { ShoppingCart, Trash } from "phosphor-react";
import { formatCoinToBrazil } from "../../../../utils/text-formatter";

export function Products() {
  const {
    allProducts,
    orders,
    deleteItemFromOrder
  } = useContext(OrderContext);

  const isEmptyOrder = orders.length === 0;

  let totalValueOfItems: number = 0;
  let delivery: number = 3.5;

  function handleDeleteItem(id: number) {
    deleteItemFromOrder(id)
  }

  return (
    <ProductsSelectedContainer>

      {isEmptyOrder ?
        (
          <>
            <p className="empty">O seu carrinho está vazio.</p>
            <a href="/">
              <ActionButton>
                <ShoppingCart size={16} weight="fill" />
                CONTINUAR COMPRANDO
              </ActionButton>
            </a>
          </>
        ) : (
          <>
            {orders.map(order => {
              const product = allProducts.find(item => item.id === order.id);
              if (product) {
                totalValueOfItems = (order.quantity * product.price) + totalValueOfItems;
                return (
                  <React.Fragment key={product.id}>
                    <ItemFromOrderContainer>
                      <div className="content">
                        <img src={product.imageUrl} alt="" />
                        <div className="item">
                          <p>{product.name}</p>
                          <div className="buttons">
                            <ProductCounter
                              productId={order.id}
                              numberOfItems={order.quantity}
                            />
                            <TrashButtonContainer
                              onClick={() => handleDeleteItem(product.id)}
                            >
                              <span><Trash size={16} /></span>
                              REMOVER
                            </TrashButtonContainer>
                          </div>
                        </div>
                      </div>
                      <span className="price">{formatCoinToBrazil(order.quantity * product.price)}</span>
                    </ItemFromOrderContainer>
                    <Divider />
                  </React.Fragment>);
              }
            })
            }
            <PricesInfoContainer>
              <div className="orderInfo">
                Total de itens
                <p>{formatCoinToBrazil(totalValueOfItems)}</p>
              </div>
              <div className="orderInfo">
                Entrega
                <p>{formatCoinToBrazil(delivery)}</p>
              </div>
              <div className="total">
                Total
                <p>{formatCoinToBrazil(totalValueOfItems + delivery)}</p>
              </div>
            </PricesInfoContainer>

            <ActionButton>
              CONFIRMAR PEDIDO
            </ActionButton>
          </>
        )
      }

    </ProductsSelectedContainer >
  );
}