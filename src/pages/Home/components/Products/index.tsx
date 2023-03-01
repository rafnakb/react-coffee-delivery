import { Coffee } from "phosphor-react";
import { useContext } from "react";
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
    filteredProducts,
    handleFilteredProductTable,
    filterList
  } = useContext(OrderContext);

  const isProductListEmpty = filteredProducts.length === 0;

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
        {filteredProducts.map((product: ProductModel) => {
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