import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { FilterModel, ProductModel } from "../pages/Home/components/Products";
import { PRODUCTS } from "../api-data/app-data";
import { ProductsData, productsReducers } from "../reducers/products-reducers";
import { OrderData, orderReducer } from "../reducers/order-reducers";

export interface Orders {
  id: string;
  orderList: OrderData[];
}

export interface DeliveryAddress {
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
  cart: Product[];
  addItemsToOrder: (item: Product) => void;
  increaseDecreaseQuantity: (productId: number, addOrRemove: string) => void;
  removeItemFromCart: (productId: number) => void;
  orderState: OrderData;
  orderIsValid: boolean;
  fillDeliveryAddress: (data: DeliveryAddress, addressIsValid: boolean) => void;
  setPaymentMethod: (paymentId: number) => void;
  payment: number;
  address: boolean;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const allProducts = PRODUCTS;
  const [productsState, productsDispatch] = useReducer(productsReducers, allProducts)
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    id: '',
    items: [],
    address: {} as DeliveryAddress,
    payment: 0
  } as OrderData)
  const [filterList, setFilterList] = useState<FilterModel[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [payment, setPayment] = useState<number>(0);
  const [address, setAddress] = useState<boolean>(false);
  const [orderIsValid, setOrderIsValid] = useState<boolean>(false);

  useEffect(() => {
    loadAllFilters();
  }, [])

  useEffect(() => {
    validateOrder();
  }, [productsState])

  function addItemsToOrder(item: Product) {
    orderDispatch({
      type: 'ADD_PRODUCTS_TO_ORDER',
      payload: {
        item: item
      }
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

  function fillDeliveryAddress(data: DeliveryAddress, addressIsValid: boolean) {
    // if (addressIsValid === true) {
    //   setAddress(true);
    // }
    // order.address = data;
    // setOrder(state => { return state; })
  }

  function setPaymentMethod(paymentId: number) {
    // if (order.payment === paymentId) {
    //   setPayment(() => 0);
    //   order.payment = payment;
    //   console.log(payment)
    //   setOrder(state => { return state; })
    //   return;
    // }
    // order.payment = paymentId;
    // setOrder(state => { return state; })
    // setPayment(paymentId);
  }

  function validateOrder() {
    if (cart.length >= 0 && payment !== 0 && address === true) {
      // setOrder(order => {
      //   order.isValid = true;
      //   return order;
      // })
      setOrderIsValid(true);
    } else {
      // setOrder(order => {
      //   order.isValid = false;
      //   return order;
      // })
      setOrderIsValid(false);
    }
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
        cart,
        addItemsToOrder,
        increaseDecreaseQuantity,
        removeItemFromCart,
        orderState,
        orderIsValid,
        fillDeliveryAddress,
        setPaymentMethod,
        payment,
        address,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}