import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { FilterModel, ProductModel } from "../pages/Home/components/Products";
import { PRODUCTS } from "../api-data/app-data";
import { deleteToLocalStorage, postToLocalStorage } from "./crud-local";

export interface Orders {
  id: string;
  orderList: OrderData[];
}

export interface OrderData {
  id: string;
  items: Product[];
  address: DeliveryAddress;
  payment: number; // (1: cartão de crédito; 2: cartão débito; 3: dinheiro)
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
  handleFilteredProductTable: (filteredTag: string) => void;
  filterList: FilterModel[];
  filteredProducts: ProductModel[];
  cart: Product[];
  addItemsToOrder: (items: Product[]) => void;
  countNumberOfItemsInOrder: () => number;
  increaseDecreaseQuantity: (id: number, addOrRemove: string) => void;
  deleteItemFromCart: (id: number) => void;
  order: OrderData;
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
  const [order, setOrder] = useState<OrderData>({
    id: '',
    items: [],
    address: {} as DeliveryAddress,
    payment: 0
  });
  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>(allProducts);
  const [filterList, setFilterList] = useState<FilterModel[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [payment, setPayment] = useState<number>(0);
  const [address, setAddress] = useState<boolean>(false);
  const [orderIsValid, setOrderIsValid] = useState<boolean>(false);

  const [orderState, dispatch] = useReducer((state: Product[], action: any) => {
    console.log(state)
    console.log(action)

    if (action.type === 'INCREMENT_QUANTITY_OF_PRODUCT') {
      const updateItems = cart.map(item => {
        if (action.payload.id === item.id) {
          return { ...item, quantity: item.quantity += 1 }
        }
        return item;
      });
      state = updateItems;
    }
    return state;
  }, [])

  useEffect(() => {
    loadAllFilters();
  }, [])

  useEffect(() => {
    validateOrder();
  }, [cart, payment, address])

  function validateOrder() {
    if (cart.length >= 0 && payment !== 0 && address === true) {
      setOrderIsValid(true);
    } else {
      setOrderIsValid(false);
    }
  }

  function addItemsToOrder(items: Product[]) {
    const updateItems = mergeOrderItems(items);
    order.items = updateItems;
    setOrder(state => { return state });
    setCart(updateItems);

    postToLocalStorage(order);
  }

  function mergeOrderItems(items: Product[]) {
    const mergedItems = items.reduce((sumItems: Product[], currencyItem) => {
      const existingItem = sumItems.find((item) => item.id === currencyItem.id);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + currencyItem.quantity
      } else {
        sumItems.push(currencyItem);
      }
      return sumItems;
    }, []);
    return mergedItems;
  }

  function increaseDecreaseQuantity(id: number, addOrRemove: string) {
    if (addOrRemove === 'add') {
      dispatch({
        type: 'INCREMENT_QUANTITY_OF_PRODUCT',
        payload: {
          id,
          addOrRemove
        }
      })
      const updateItems = cart.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity += 1 }
        }
        return item;
      });
      order.items = updateItems;
      setOrder(state => { return state; });
      setCart(updateItems);

      postToLocalStorage(order);
    }
    if (addOrRemove === 'remove') {
      const updateItems = cart.map(item => {
        if ((item.id === id) && (item.quantity > 1)) {
          return { ...item, quantity: item.quantity -= 1 }
        }
        return item;
      });
      order.items = updateItems;
      setOrder(state => { return state; });
      setCart(updateItems);

      postToLocalStorage(order);
    }
  }

  function countNumberOfItemsInOrder() {
    let total = cart.reduce((a, b) => a + b.quantity, 0);
    return total;
  }

  function fillDeliveryAddress(data: DeliveryAddress, addressIsValid: boolean) {
    if (addressIsValid === true) {
      setAddress(true);
    }
    order.address = data;
    setOrder(state => { return state; })

    postToLocalStorage(order);
  }

  function setPaymentMethod(paymentId: number) {
    // if (order.payment === paymentId) {
    //   setPayment(() => 0);
    //   order.payment = payment;
    //   console.log(payment)
    //   setOrder(state => { return state; })
    //   return;
    // }
    order.payment = paymentId;
    setOrder(state => { return state; })
    setPayment(paymentId);

    postToLocalStorage(order);
  }

  function deleteItemFromCart(id: number) {
    const updateItems = cart.filter(item => {
      return item.id !== id;
    });
    order.items = updateItems;
    setOrder(state => { return state });
    setCart(updateItems);

    postToLocalStorage(order);
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
        addItemsToOrder,
        countNumberOfItemsInOrder,
        increaseDecreaseQuantity,
        deleteItemFromCart,
        order,
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