import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { Products } from "./components/ProductSelected";
import {
  CheckoutContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <span>Complete seu pedido</span>
      <span>Cafés selecionados</span>
      <div className="completeInfo">
        <Address />
        <Payment />
      </div>
      <Products />
    </CheckoutContainer>
  );
}