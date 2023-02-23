import { Coffee } from "phosphor-react";
import { useState } from "react";
import { Product } from "./Product";
import { TagBox, ProductsContainer, ProductsGrid, EmptyList } from "./styles";

interface ProductModel {
  id: number;
  tags: string[];
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface FilterModel {
  tag: string;
  isSelected: boolean;
}

export function Products() {
  const [products, setProducts] = useState<ProductModel[]>(PRODUCTS);

  let allTags: string[] = [];
  let tagObj: FilterModel[];

  products.map(product => {
    product.tags.forEach(tag => {
      allTags.push(tag.toString());
    })
  })
  allTags = [...new Set(allTags)];

  tagObj = allTags.map(str => {
    return {
      tag: str.toString(),
      isSelected: false
    };
  })
  const [filterList, setFilterList] = useState<FilterModel[]>(tagObj);

  function handleFilteredProductTable(filteredTag: string) {
    const updateFilterTags = filterList.map(tag => {
      if (tag.tag === filteredTag) {
        return { ...tag, isSelected: !tag.isSelected }
      }
      return tag;
    })
    setFilterList(updateFilterTags);

    const hasFilter = updateFilterTags.some(tag => tag.isSelected === true);

    if (hasFilter === true) {
      const updateProductList = products.filter(product => {
        return product.tags.some(value => filteredTag.includes(value));
      })
      setProducts(updateProductList);
    } else {
      setProducts(PRODUCTS);
    }
  }

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
          return <Product
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

const PRODUCTS = [
  {
    id: 1,
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: 'src/assets/products/expresso-tradicional.svg'
  },
  {
    id: 2,
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageUrl: 'src/assets/products/expresso-americano.svg'
  },
  {
    id: 3,
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageUrl: 'src/assets/products/expresso-cremoso.svg'
  },
  {
    id: 4,
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageUrl: 'src/assets/products/expresso-gelado.svg'
  },
  {
    id: 5,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageUrl: 'src/assets/products/cafe-com-leite.svg'
  },
  {
    id: 6,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageUrl: 'src/assets/products/latte.svg'
  },
  {
    id: 7,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imageUrl: 'src/assets/products/capuccino.svg'
  },
  {
    id: 8,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imageUrl: 'src/assets/products/macchiato.svg'
  },
  {
    id: 9,
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imageUrl: 'src/assets/products/mocaccino.svg'
  },
  {
    id: 10,
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imageUrl: 'src/assets/products/chocolate-quente.svg'
  },
  {
    id: 11,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imageUrl: 'src/assets/products/cubano.svg'
  },
  {
    id: 12,
    tags: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imageUrl: 'src/assets/products/havaiano.svg'
  },
  {
    id: 13,
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imageUrl: 'src/assets/products/arabe.svg'
  },
  {
    id: 14,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageUrl: 'src/assets/products/irlandes.svg'
  }
]