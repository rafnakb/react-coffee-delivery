import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { Product, OrderData, OrderContext } from "../../../../../contexts/OrderContext";

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
    order,
    cart,
    addItemsToOrder,
  } = useContext(OrderContext);

  const [quantityOfProduct, setQuantityOfProduct] = useState(1);

  function handleIncreaseDecreaseQuantity(addOrRemove: string) {
    if (addOrRemove === 'add') {
      setQuantityOfProduct((state) => {
        return state + 1;
      })
    }
    if (addOrRemove === 'remove') {
      setQuantityOfProduct((state) => {
        if (state < 2) {
          return 1;
        } else {
          return state - 1;
        }
      })
    }
  }

  function handleAddItemToOrder() {
    const newItem: Product = {
      id: props.id,
      quantity: quantityOfProduct
    }
    addItemsToOrder([...cart, newItem]);
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
              // onClick={handleRemoveItemQuantity}
              title="Remover item"
              onClick={() => handleIncreaseDecreaseQuantity('remove')}
            >
              <Minus size={14} weight="bold" />
            </button>
            <span>{quantityOfProduct}</span>
            <button
              // onClick={handleAddItemQuantity}
              title="Adicionar item"
              onClick={() => handleIncreaseDecreaseQuantity('add')}
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