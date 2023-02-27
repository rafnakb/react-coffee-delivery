import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CartItemCounter, HeaderContainer } from "./styles";

export function Header() {

  const isEmptyCart = 0 === 0;

  return (
    <HeaderContainer>
      <img src="src/assets/coffee-logo.svg" alt="" />
      <nav>
        <span>
          <MapPin size={20} weight="fill" />
          <p>Cedral, SP</p>
        </span>
        <NavLink to="/checkout" title="Carrinho de compras">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
        {isEmptyCart && (
          <CartItemCounter>
            2
          </CartItemCounter>
        )}
      </nav>
    </HeaderContainer>
  );
}