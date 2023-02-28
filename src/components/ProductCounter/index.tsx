import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { ProductCounterContainer } from "./styles";

interface ProductCounterProps {
  productId: number;
  numberOfItems: number;
}

export function ProductCounter({ productId, numberOfItems }: ProductCounterProps) {
  const {
    increaseDecreaseQuantity
  } = useContext(OrderContext);

  function handleIncreaseDecreaseQuantity(addOrRemove: string) {
    increaseDecreaseQuantity(productId, addOrRemove)
  }

  return (
    <ProductCounterContainer>
      <button
        title="Remover item"
        onClick={() => handleIncreaseDecreaseQuantity('remove')}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>{numberOfItems}</span>
      <button
        title="Adicionar item"
        onClick={() => handleIncreaseDecreaseQuantity('add')}
      >
        <Plus size={14} weight="bold" />
      </button>
    </ProductCounterContainer>
  );
}