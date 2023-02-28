import { createContext, ReactNode, useState } from "react";
import { FilterModel, ProductModel } from "../pages/Home/components/Products";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useForm } from "react-hook-form";

export interface OrdersData {
  id: number;
  quantity: number;
  address: [
    {
      cep: string;
      rua: string;
      numero: string;
      complemento: string;
      bairro: string;
      cidade: string;
      uf: string;
    }
  ];
  payment: number; // (1: cartão de crédito; 2: cartão débito; 3: dinheiro)
}

interface OrderContextType {
  allProducts: ProductModel[],
  handleFilteredProductTable: (filteredTag: string) => void;
  filterList: FilterModel[];
  filteredProducts: ProductModel[];
  orders: OrdersData[];
  addItemToOrder: (list: OrdersData[]) => void;
  numberOfItemsInOrder: number;
  increaseDecreaseQuantity: (id: number, addOrRemove: string) => void;
  deleteItemFromOrder: (id: number) => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const allProducts = PRODUCTS;
  const [orders, setOrders] = useState<OrdersData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>(allProducts);

  function addItemToOrder(list: OrdersData[]) {
    const mergedOrders = list.reduce((sumOrders: OrdersData[], currencyOrders) => {
      const existingOrder = sumOrders.find((order) => order.id === currencyOrders.id);
      if (existingOrder) {
        existingOrder.quantity = existingOrder.quantity + currencyOrders.quantity
      } else {
        sumOrders.push(currencyOrders);
      }
      return sumOrders;
    }, []);

    setOrders(mergedOrders);
  }

  function increaseDecreaseQuantity(id: number, addOrRemove: string) {
    if (addOrRemove === 'add') {
      const updateOrderList = orders.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity += 1 }
        }
        return item;
      });
      setOrders(updateOrderList);
    }
    if (addOrRemove === 'remove') {
      const updateOrderList = orders.map(item => {
        if ((item.id === id) && (item.quantity > 1)) {
          return { ...item, quantity: item.quantity -= 1 }
        }
        return item;
      });
      setOrders(updateOrderList);
    }
  }

  function deleteItemFromOrder(id: number) {
    const updateOrderList = orders.filter(item => {
      return item.id !== id;
    });
    setOrders(updateOrderList);
  }


  function countNumberOfItemsInOrder() {
    let total = 0;
    orders.map(order => {
      return total = total + order.quantity;
    })
    return total;
  }

  const numberOfItemsInOrder = countNumberOfItemsInOrder();

  let allTags: string[] = [];

  allProducts.map(product => {
    product.tags.forEach(tag => {
      allTags.push(tag.toString());
    })
  })
  allTags = [...new Set(allTags)];

  let tagObj: FilterModel[];
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
      const updateProductList = filteredProducts.filter(product => {
        return product.tags.some(value => filteredTag.includes(value));
      })
      setFilteredProducts(updateProductList);
    } else {
      setFilteredProducts(allProducts);
    }
  }

  return (
    <OrderContext.Provider
      value={{
        allProducts,
        handleFilteredProductTable,
        filterList,
        filteredProducts,
        orders,
        addItemToOrder,
        numberOfItemsInOrder,
        increaseDecreaseQuantity,
        deleteItemFromOrder
      }}
    >
      {children}
    </OrderContext.Provider>
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