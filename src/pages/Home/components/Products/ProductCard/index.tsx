import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { OrderContext, OrdersData } from "../../../../../contexts/OrderContext";
import {
  BuyContainer,
  CartButton,
  OrderCountContainer,
  PriceBox,
  ProductCardContainer,
  TagContainer,
} from "./styles";

interface ProductProps {
  id: number;
  tags: string[];
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({ ...props }: ProductProps) {
  const {
    orders,
    addItemToOrder
  } = useContext(OrderContext);

  const [quantityOfProduct, setQuantityOfProduct] = useState(1);

  function handleRemoveItemQuantity() {
    setQuantityOfProduct((state) => {
      if (state < 2) {
        return 1;
      } else {
        return state - 1;
      }
    })
  }

  function handleAddItemQuantity() {
    setQuantityOfProduct((state) => {
      return state + 1;
    })
  }

  function handleAddItemToOrder() {
    const newItem: OrdersData = {
      id: props.id,
      quantity: quantityOfProduct
    }
    addItemToOrder([...orders, newItem]);
  }

  return (
    <ProductCardContainer>
      <img src={props.imageUrl} alt="" />
      <TagContainer>
        {props.tags.map(tag => {
          return <span
            key={tag.toString()}>{
              tag.toString()
            }</span>
        })}
      </TagContainer>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <BuyContainer>
        <PriceBox>
          <label>R$</label>
          <span>{(props.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </PriceBox>
        <div>
          <OrderCountContainer>
            <button
              onClick={handleRemoveItemQuantity}
              title="Remover item"
            >
              <Minus size={14} weight="bold" />
            </button>
            <span>{quantityOfProduct}</span>
            <button
              onClick={handleAddItemQuantity}
              title="Adicionar item"
            >
              <Plus size={14} weight="bold" />
            </button>
          </OrderCountContainer>
          <CartButton title="Adicionar ao carrinho" onClick={handleAddItemToOrder}>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </div>
      </BuyContainer>
    </ProductCardContainer>
  );
}