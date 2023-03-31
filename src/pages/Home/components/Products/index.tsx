import { OrderContext } from "@src/contexts/OrderContext";
import { Coffee } from "phosphor-react";
import { useContext } from "react";
import { ProductCard } from "./ProductCard";
import { TagBox, ProductsContainer, ProductsGrid, EmptyList, TitleAndFilters } from "./styles";

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
    handleFilteredProductTable,
    filterList,
    productsState
  } = useContext(OrderContext);

  const isProductListEmpty = productsState.length === 0;

  return (
    <ProductsContainer>
      <TitleAndFilters>
        <h1>Nossos cafés</h1>
        <div className="tagsContainer">
          {filterList.map(tag => {
            return (
              <TagBox
                className="tagBox"
                key={tag.tag}
                isSelected={tag.isSelected}
                onClick={() => handleFilteredProductTable(tag.tag)}
              >
                {tag.tag}
              </TagBox>
            )
          })}
        </div>
      </TitleAndFilters>

      {isProductListEmpty && (
        <EmptyList>
          <Coffee size={54} weight="fill" />
          Nenhum produto encontrado
        </EmptyList>
      )}

      <ProductsGrid>
        {productsState.map((product: ProductModel) => {
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