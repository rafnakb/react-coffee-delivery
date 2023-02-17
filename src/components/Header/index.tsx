import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="src/assets/coffee-logo.svg" alt="" />
      <nav>
        <NavLink to="" title="Carrinho de compras">
          <ShoppingCart size={32} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}