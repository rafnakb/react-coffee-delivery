import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { FilterModel, ProductModel } from "../pages/Home/components/Products";
import { PRODUCTS } from "../api-data/app-data";
import { productsReducers } from "../reducers/products-reducers";
import { getOrder, OrderData, orderReducer } from "../reducers/order-reducers";
import { useNavigate } from "react-router-dom";

export interface Address {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface Product {
  id: number;
  quantity: number;
}

interface OrderContextType {
  allProducts: ProductModel[],
  productsState: ProductModel[],
  handleFilteredProductTable: (filteredTag: string) => void;
  filterList: FilterModel[];
  addItemsToOrder: (item: Product) => void;
  increaseDecreaseQuantity: (productId: number, addOrRemove: string) => void;
  removeItemFromCart: (productId: number) => void;
  orderState: OrderData;
  orderIsValid: boolean;
  updateOrderAddress: (addressData: Address) => void;
  setPaymentMethod: (paymentId: number) => void;
  validateOrder: () => void;
  confirmOrder: (deliveryPrice: number, totalPrice: number) => string;
  resetOrder: () => void;
  loadOpenedOrder: () => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const allProducts = PRODUCTS;
  const [productsState, productsDispatch] = useReducer(productsReducers, allProducts);

  function initOrder() {
    const data = getOrder();
    if (data === undefined) {
      return {
        id: '',
        items: [],
        address: {} as Address,
        payment: 0,
        deliveryPrice: 0,
        totalPrice: 0,
      } as OrderData;
    }
    return data;
  }

  const [orderState, orderDispatch] = useReducer(orderReducer, {
    id: '',
    items: [],
    address: {} as Address,
    payment: 0,
    deliveryPrice: 0,
    totalPrice: 0,
  } as OrderData, initOrder)
  const [filterList, setFilterList] = useState<FilterModel[]>([]);
  const [orderIsValid, setOrderIsValid] = useState<boolean>(false);

  useEffect(() => {
    loadAllFilters();
    // loadOpenedOrder();
  }, [])

  useEffect(() => {
    validateOrder();
  }, [productsState, orderIsValid])

  function addItemsToOrder(item: Product) {
    orderDispatch({
      type: 'ADD_PRODUCTS_TO_ORDER',
      payload: {
        item: item
      }
    })
  }

  function loadOpenedOrder() {
    orderDispatch({
      type: 'GET_OPEN_ORDER'
    })
  }

  function increaseDecreaseQuantity(productId: number, addOrRemove: string) {
    if (addOrRemove === 'add') {
      orderDispatch({
        type: 'INCREMENT_QUANTITY_OF_PRODUCT',
        payload: {
          id: productId
        }
      })
    }
    if (addOrRemove === 'remove') {
      orderDispatch({
        type: 'DECREMENT_QUANTITY_OF_PRODUCT',
        payload: {
          id: productId
        }
      })
    }
  }

  function removeItemFromCart(productId: number) {
    orderDispatch({
      type: 'REMOVE_PRODUCTS_TO_ORDER',
      payload: {
        id: productId
      }
    })
  }

  function updateOrderAddress(addressData: Address) {
    orderDispatch({
      type: 'UPDATE_ADDRESS',
      payload: {
        address: addressData
      }
    })
  }

  function setPaymentMethod(paymentId: number) {
    orderDispatch({
      type: 'UPDATE_PAYMENT',
      payload: {
        paymentId: paymentId
      }
    })
  }

  function validateOrder() {
    if (orderState.items.length > 0 &&
      orderState.payment > 0 &&
      Object.entries(orderState.address).length > 0) {
      setOrderIsValid(() => true);
    } else {
      setOrderIsValid(() => false);
    }
  }

  function confirmOrder(deliveryPrice: number, totalPrice: number) {
    orderDispatch({
      type: 'CONFIRM_ORDER',
      payload: {
        delivery: deliveryPrice,
        total: totalPrice
      }
    })
    return orderState.id;
  }

  function resetOrder() {
    orderDispatch({
      type: 'RESET_ORDER'
    })
  }

  function loadAllFilters() {
    let allTags: string[] = [];

    productsState.map((product: any) => {
      product.tags.forEach((tag: { toString: () => string; }) => {
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
      productsDispatch({
        type: 'FILTERED_PRODUCTS',
        payload: {
          products: PRODUCTS,
          tags: filteredTag,
        }
      })
    } else {
      productsDispatch({
        type: 'GET_ALL_PRODUCTS',
        payload: {
          products: PRODUCTS,
        }
      })
    }
  }

  return (
    <OrderContext.Provider
      value={{
        allProducts,
        productsState,
        handleFilteredProductTable,
        filterList,
        addItemsToOrder,
        increaseDecreaseQuantity,
        removeItemFromCart,
        orderState,
        orderIsValid,
        updateOrderAddress,
        setPaymentMethod,
        validateOrder,
        confirmOrder,
        resetOrder,
        loadOpenedOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}