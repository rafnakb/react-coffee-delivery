import { Minus, Plus } from "phosphor-react";
import { ProductCounterContainer } from "./styles";

export function ProductCounter() {
  return (
    <ProductCounterContainer>
      <button
        title="Remover item"
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>1</span>
      <button
        title="Adicionar item"
      >
        <Plus size={14} weight="bold" />
      </button>
    </ProductCounterContainer>
  );
}