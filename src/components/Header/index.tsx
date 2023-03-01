import { ShoppingCart, MapPin } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import { CartItemCounter, HeaderContainer } from "./styles";

export function Header() {
  const {
    countNumberOfItemsInOrder
  } = useContext(OrderContext);

  let numberOfItensInOrder = countNumberOfItemsInOrder();

  const isEmptyCart = numberOfItensInOrder === 0;

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
              {numberOfItensInOrder}
            </CartItemCounter>
          )}
        </nav>
      </div>
    </HeaderContainer>
  );
}