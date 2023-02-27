import { Coffee } from "phosphor-react";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { ProductCard } from "./ProductCard";
import { TagBox, ProductsContainer, ProductsGrid, EmptyList } from "./styles";

export interface ProductModel {
  id: number;
  tags: string[];
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface FilterModel {
  tag: string;
  isSelected: boolean;
}

export function Products() {
  const {
    products,
    handleFilteredProductTable,
    filterList
  } = useContext(OrderContext);

  const isProductListEmpty = products.length === 0;

  return (
    <ProductsContainer>
      <header>
        <p>Nossos cafés</p>
        <div>
          {filterList.map(tag => {
            return <TagBox
              key={tag.tag}
              isSelected={tag.isSelected}
              onClick={() => handleFilteredProductTable(tag.tag)}
            >
              {tag.tag}
            </TagBox>
          })}
        </div>
      </header>
      {isProductListEmpty && (
        <EmptyList>
          <Coffee size={54} weight="fill" />
          Nenhum produto encontrado
        </EmptyList>
      )}
      <ProductsGrid>
        {products.map((product: ProductModel) => {
          return <ProductCard
            key={product.id}
            id={product.id}
            tags={product.tags}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        })}
      </ProductsGrid>
    </ProductsContainer>
  );
}