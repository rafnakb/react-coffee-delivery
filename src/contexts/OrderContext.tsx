import { createContext, ReactNode, useEffect, useState } from "react";
import { FilterModel, ProductModel } from "../pages/Home/components/Products";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useForm } from "react-hook-form";
import { PRODUCTS } from "../api-data/app-data";

export interface CreateNewOrderData {
  id: string;
  items: OrderItems[];
  address: Address[];
  payment: number; // (1: cartão de crédito; 2: cartão débito; 3: dinheiro)
}

export interface OrderItems {
  id: number;
  quantity: number;
}

export interface Address {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface Cart {
  id: number;
  quantity: number;
}

interface OrderContextType {
  allProducts: ProductModel[],
  handleFilteredProductTable: (filteredTag: string) => void;
  filterList: FilterModel[];
  filteredProducts: ProductModel[];
  cart: Cart[];
  addItemToCart: (items: Cart[]) => void;
  countNumberOfItemsInOrder: () => number;
  increaseDecreaseQuantity: (id: number, addOrRemove: string) => void;
  deleteItemFromCart: (id: number) => void;
  setPaymentMethod: (paymentId: number) => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const allProducts = PRODUCTS;
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>(allProducts);
  const [filterList, setFilterList] = useState<FilterModel[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const [payment, setPayment] = useState(0);
  const [order, setOrder] = useState<CreateNewOrderData | null>(null);

  useEffect(() => {
    countNumberOfItemsInOrder();
  }, [cart])

  useEffect(() => {
    loadAllFilters();
  }, [])

  useEffect(() => {
    // orderIsValid();
  }, [cart])

  function orderIsValid() {
    if (order === null) {
      return
    }
    for (let value in order) {
      if (value === undefined || value === null || value === '') {
        return false;
      }
    }
    return true;
  }

  function addItemToCart(items: Cart[]) {
    const mergedItems = items.reduce((sumItems: Cart[], currencyItem) => {
      const existingItem = sumItems.find((item) => item.id === currencyItem.id);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + currencyItem.quantity
      } else {
        sumItems.push(currencyItem);
      }
      return sumItems;
    }, []);

    setCart(mergedItems);
  }

  function increaseDecreaseQuantity(id: number, addOrRemove: string) {
    if (addOrRemove === 'add') {
      const updateOrderList = cart.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity += 1 }
        }
        return item;
      });
      setCart(updateOrderList);
    }
    if (addOrRemove === 'remove') {
      const updateOrderList = cart.map(item => {
        if ((item.id === id) && (item.quantity > 1)) {
          return { ...item, quantity: item.quantity -= 1 }
        }
        return item;
      });
      setCart(updateOrderList);
    }
  }

  function setPaymentMethod(paymentId: number) {
    //const updatePaymento = orders.find(order => order.id === )
  }

  function deleteItemFromCart(id: number) {
    const updateOrderList = cart.filter(item => {
      return item.id !== id;
    });
    setCart(updateOrderList);
  }

  function countNumberOfItemsInOrder() {
    let total = cart.reduce((a, b) => a + b.quantity, 0);
    return total;
  }

  function loadAllFilters() {
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

    setFilterList(tagObj);
  }

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
        cart,
        addItemToCart,
        countNumberOfItemsInOrder,
        increaseDecreaseQuantity,
        deleteItemFromCart,
        setPaymentMethod
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}