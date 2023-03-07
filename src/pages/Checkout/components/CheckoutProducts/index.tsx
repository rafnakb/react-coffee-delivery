import { ProductCounter } from "../../../../components/ProductCounter";
import { ActionButton, Divider, ItemFromOrderContainer, PricesInfoContainer, CheckoutProductsContainer, TrashButtonContainer } from "./styles";
import React, { useContext, useEffect, useRef } from "react";
import { Address, OrderContext } from "../../../../contexts/OrderContext";
import { ShoppingCart, Trash } from "phosphor-react";
import { formatCoinToBrazil } from "../../../../utils/text-formatter";
import { useNavigate } from "react-router-dom";
import { getOrder, OrderData } from "../../../../reducers/order-reducers";

export function CheckoutProducts() {
  const {
    allProducts,
    orderState,
    removeItemFromCart,
    orderIsValid,
    confirmOrder,
    resetOrder,
    loadOpenedOrder
  } = useContext(OrderContext);
  const navigate = useNavigate();

  let orderData: OrderData = loadOpenedOrder();

  const isEmptyOrder = orderData.items.length === 0;

  let totalValueOfItems: number = 0;
  let delivery: number = 3.5;

  function handleRemoveItem(productId: number) {
    removeItemFromCart(productId)
  }

  function handleConfirmOrder() {
    confirmOrder(delivery, totalValueOfItems);
    navigate(`/order-confirmation/${orderState}`);
    resetOrder();
  }

  return (
    <CheckoutProductsContainer>

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
            {orderData.items.map(order => {
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
                              onClick={() => handleRemoveItem(product.id)}
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

            <ActionButton disabled={!orderIsValid} onClick={handleConfirmOrder}>
              CONFIRMAR PEDIDO
            </ActionButton>
          </>
        )
      }

    </CheckoutProductsContainer >
  );
}