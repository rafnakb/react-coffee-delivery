import { ShoppingCart, MapPin } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import { CartItemCounter, HeaderContainer } from "./styles";

export function Header() {
  const {
    orderState,
  } = useContext(OrderContext);

  let totalOfItems = orderState.items.reduce((a, b) => a + b.quantity, 0);

  const isEmptyCart = totalOfItems === 0;

  return (
    <HeaderContainer>
      <div className="contentSize">
        <a href="/">
          <img src="src/assets/coffee-logo.svg" alt="" />
        </a>
        <nav>
          <span>
            <MapPin size={20} weight="fill" />
            <p>Cedral, SP</p>
          </span>
          <NavLink to="/checkout" title="Carrinho de compras">
            <ShoppingCart size={20} weight="fill" />
          </NavLink>
          {!isEmptyCart && (
            <CartItemCounter>
              {totalOfItems}
            </CartItemCounter>
          )}
        </nav>
      </div>
    </HeaderContainer>
  );
}