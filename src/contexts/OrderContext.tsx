import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { FilterModel, ProductModel } from "../pages/Home/components/Products";
import { PRODUCTS } from "../api-data/app-data";
import { productsReducers } from "../reducers/products-reducers";
import { getOrderFromStorage, OrderData, orderReducer } from "../reducers/order-reducers";
import { useNavigate } from "react-router-dom";
import { addProductsToOrderAction, confirmOrderAction, decrementQuantityOfProductAction, filterProductsAction, getAllProductsAction, incrementQuantityOfProductAction, removeProductsToOrderAction, resetOrderAction, updateAddressAction, updatePaymentAction } from "../reducers/actions";

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
  confirmOrder: (deliveryPrice: number, totalPrice: number) => void;
  resetOrder: () => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const allProducts = PRODUCTS;
  const [productsState, productsDispatch] = useReducer(productsReducers, allProducts);

  function initOrder() {
    const orderData = getOrderFromStorage();
    if (orderData === undefined) {
      return {
        id: '',
        items: [],
        address: {} as Address,
        payment: 0,
        deliveryPrice: 0,
        totalPrice: 0,
      } as OrderData;
    }
    return orderData;
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
  }, [])

  useEffect(() => {
    validateOrder();
  }, [productsState, orderIsValid])

  function addProductsToOrder(item: Product) {
    orderDispatch(addProductsToOrderAction(item));
  }

  function increaseDecreaseQuantity(productId: number, addOrRemove: string) {
    if (addOrRemove === 'add') {
      orderDispatch(incrementQuantityOfProductAction(productId));
    }
    if (addOrRemove === 'remove') {
      orderDispatch(decrementQuantityOfProductAction(productId));
    }
  }

  function removeItemFromCart(productId: number) {
    orderDispatch(removeProductsToOrderAction(productId));
  }

  function updateOrderAddress(addressData: Address) {
    orderDispatch(updateAddressAction(addressData));
  }

  function setPaymentMethod(paymentId: number) {
    orderDispatch(updatePaymentAction(paymentId));
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
    orderDispatch(confirmOrderAction(deliveryPrice, totalPrice))
  }

  function resetOrder() {
    orderDispatch(resetOrderAction());
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
      productsDispatch(filterProductsAction(allProducts, filteredTag))
    } else {
      productsDispatch(getAllProductsAction(allProducts))
    }
  }

  return (
    <OrderContext.Provider
      value={{
        allProducts,
        productsState,
        handleFilteredProductTable,
        filterList,
        addItemsToOrder: addProductsToOrder,
        increaseDecreaseQuantity,
        removeItemFromCart,
        orderState,
        orderIsValid,
        updateOrderAddress,
        setPaymentMethod,
        validateOrder,
        confirmOrder,
        resetOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};