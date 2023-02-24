import { MapPinLine } from "phosphor-react";
import { Address } from "./components/Address";
import { Products } from "./components/Products";
import {
  CheckoutContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <span>Complete seu pedido</span>
      <span>Cafés selecionados</span>

      <Address />

      <Products />

    </CheckoutContainer>
  );
}