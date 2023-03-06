import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { CheckoutProducts } from "./components/CheckoutProducts";
import {
  CheckoutContainer,
} from "./styles";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export function Checkout() {
  const {
    orderState,
    validateOrder
  } = useContext(OrderContext);

  useEffect(() => {
    validateOrder();
  }, [orderState])

  return (
    <CheckoutContainer>
      <span>Complete seu pedido</span>
      <span>Cafés selecionados</span>
      <div className="completeInfo">
        <Address />
        <Payment />
      </div>
      <CheckoutProducts />
    </CheckoutContainer>
  );
}