import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="src/assets/coffee-logo.svg" alt="" />
      <nav>
        <span>
          <MapPin size={20} weight="fill" />
          <p>Cedral, SP</p>
        </span>
        <NavLink to="" title="Carrinho de compras">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}