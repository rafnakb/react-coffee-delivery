import { Address, Product } from "../contexts/OrderContext";
import { v4 as uuidv4 } from 'uuid';
import { ActionsTypes } from "./actions";

export interface OrderData {
  id: string;
  items: Product[];
  address: Address;
  payment: number; // (1: cartão de crédito; 2: cartão débito; 3: dinheiro)
  deliveryPrice: number;
  totalPrice: number;
}

export function orderReducer(state: OrderData, action: any) {
  switch (action.type) {
    case ActionsTypes.GET_OPEN_ORDER: {
      let storageOrder = getOrderFromStorage();
      if (storageOrder === undefined) {
        return state;
      }
      return storageOrder;
    }
    case ActionsTypes.ADD_PRODUCTS_TO_ORDER: {
      const index = state.items.findIndex((item) => item.id === action.payload.item.id);
      if (index === -1) {
        postOrderOnStorage({ ...state, items: [...state.items, action.payload.item] });
        return { ...state, items: [...state.items, action.payload.item] };
      } else {
        const mergedItems = state.items.map((item) => item.id === action.payload.item.id ?
          { ...item, quantity: item.quantity + action.payload.item.quantity } : item)
        postOrderOnStorage({ ...state, items: mergedItems });
        return { ...state, items: mergedItems };
      }
    }
    case ActionsTypes.INCREMENT_QUANTITY_OF_PRODUCT: {
      const listWithIncrementedItems = state.items.map((item) => item.id === action.payload.id ?
        { ...item, quantity: item.quantity + 1 } : item)
      postOrderOnStorage({ ...state, items: listWithIncrementedItems });
      return { ...state, items: listWithIncrementedItems };
    }
    case ActionsTypes.DECREMENT_QUANTITY_OF_PRODUCT: {
      const listWithDecrmentedItems = state.items.map((item) => item.id === action.payload.id ?
        { ...item, quantity: item.quantity - 1 } : item)
      postOrderOnStorage({ ...state, items: listWithDecrmentedItems });
      return { ...state, items: listWithDecrmentedItems };
    }
    case ActionsTypes.REMOVE_PRODUCTS_TO_ORDER: {
      const listWithRemovedProduct = state.items.filter((item) => {
        return item.id !== action.payload.id;
      })
      postOrderOnStorage({ ...state, items: listWithRemovedProduct });
      return { ...state, items: listWithRemovedProduct };
    }
    case ActionsTypes.UPDATE_ADDRESS: {
      postOrderOnStorage({ ...state, address: action.payload.address });
      return { ...state, address: action.payload.address };
    }
    case ActionsTypes.UPDATE_PAYMENT: {
      postOrderOnStorage({ ...state, payment: action.payload.paymentId });
      return { ...state, payment: action.payload.paymentId };
    }
    case ActionsTypes.CONFIRM_ORDER: {
      const updateState = {
        ...state,
        id: uuidv4(),
        deliveryPrice: action.payload.delivery,
        totalPrice: action.payload.total,
      };
      postOrderToListOrdersStorage(updateState);
      return updateState;
    }
    case ActionsTypes.RESET_ORDER: {
      const resetState = {
        id: '',
        items: [],
        address: {} as Address,
        payment: 0,
        deliveryPrice: 0,
        totalPrice: 0,
      }
      deleteOrderFromStorage();
      return resetState;
    }
    default:
      return state;
  }
}

/* 
  Local Storage CRUD
*/

export function getOrderFromStorage() {
  let objString: string | null = localStorage.getItem('coffeeDeliveyOrderData');
  let order: OrderData = {} as OrderData;
  if (objString !== null) {
    order = JSON.parse(objString);
    return order;
  }
}

export function postOrderOnStorage(data: OrderData) {
  localStorage.setItem('coffeeDeliveyOrderData', JSON.stringify(data));
}

export function deleteOrderFromStorage() {
  localStorage.removeItem('coffeeDeliveyOrderData');
}

export function postOrderToListOrdersStorage(newOrder: OrderData) {
  const arrString: string | null = localStorage.getItem('coffeeDeliveyOrderList');
  const orderList: OrderData[] = arrString ? JSON.parse(arrString) : [];
  orderList.push(newOrder);
  localStorage.setItem('coffeeDeliveyOrderList', JSON.stringify(orderList));
}

export function getOrderByIdFromStorage(orderId: string) {
  const arrString: string | null = localStorage.getItem('coffeeDeliveyOrderList');
  const orderList: OrderData[] = arrString ? JSON.parse(arrString) : [];
  const orderById = orderList.find(order => order.id === orderId)
  return orderById;
}

export function getAllOrderFromStorage() {
  const arrString: string | null = localStorage.getItem('coffeeDeliveyOrderList');
  const orderList: OrderData[] = arrString ? JSON.parse(arrString) : [];
  return orderList;
}

