import { Address, Product } from "../contexts/OrderContext";
import { v4 as uuidv4 } from 'uuid';

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
    case 'GET_OPEN_ORDER': {
      let storageOrder = getOrder();
      if (storageOrder === undefined) {
        return state;
      }
      return storageOrder;
    }
    case 'ADD_PRODUCTS_TO_ORDER': {
      const index = state.items.findIndex((item) => item.id === action.payload.item.id);
      if (index === -1) {
        postOrder({ ...state, items: [...state.items, action.payload.item] });
        return { ...state, items: [...state.items, action.payload.item] };
      } else {
        const mergedItems = state.items.map((item) => item.id === action.payload.item.id ?
          { ...item, quantity: item.quantity + action.payload.item.quantity } : item)
        postOrder({ ...state, items: mergedItems });
        return { ...state, items: mergedItems };
      }
    }
    case 'INCREMENT_QUANTITY_OF_PRODUCT': {
      const listWithIncrementedItems = state.items.map((item) => item.id === action.payload.id ?
        { ...item, quantity: item.quantity + 1 } : item)
      postOrder({ ...state, items: listWithIncrementedItems });
      return { ...state, items: listWithIncrementedItems };
    }
    case 'DECREMENT_QUANTITY_OF_PRODUCT': {
      const listWithDecrmentedItems = state.items.map((item) => item.id === action.payload.id ?
        { ...item, quantity: item.quantity - 1 } : item)
      postOrder({ ...state, items: listWithDecrmentedItems });
      return { ...state, items: listWithDecrmentedItems };
    }
    case 'REMOVE_PRODUCTS_TO_ORDER': {
      const listWithRemovedProduct = state.items.filter((item) => {
        return item.id !== action.payload.id;
      })
      postOrder({ ...state, items: listWithRemovedProduct });
      return { ...state, items: listWithRemovedProduct };
    }
    case 'UPDATE_ADDRESS': {
      postOrder({ ...state, address: action.payload.address });
      return { ...state, address: action.payload.address };
    }
    case 'UPDATE_PAYMENT': {
      postOrder({ ...state, payment: action.payload.paymentId });
      return { ...state, payment: action.payload.paymentId };
    }
    case 'CONFIRM_ORDER': {
      const updateState = {
        ...state,
        id: uuidv4(),
        deliveryPrice: action.payload.delivery,
        totalPrice: action.payload.total,
      };
      postOrderToListOrders(updateState);
      return updateState;
    }
    case 'RESET_ORDER': {
      const resetState = {
        id: '',
        items: [],
        address: {} as Address,
        payment: 0,
        deliveryPrice: 0,
        totalPrice: 0,
      }
      deleteOrder();
      return resetState;
    }
    default:
      return state;
  }
}

/* 
  Local Storage CRUD
*/

export function getOrder() {
  let objString: string | null = localStorage.getItem('coffeeDeliveyOrderData');
  let order: OrderData = {} as OrderData;
  if (objString !== null) {
    order = JSON.parse(objString);
    return order;
  }
}

export function postOrder(data: OrderData) {
  localStorage.setItem('coffeeDeliveyOrderData', JSON.stringify(data));
}

export function deleteOrder() {
  localStorage.removeItem('coffeeDeliveyOrderData');
}

export function postOrderToListOrders(newOrder: OrderData) {
  const arrString: string | null = localStorage.getItem('coffeeDeliveyOrderList');
  const orderList: OrderData[] = arrString ? JSON.parse(arrString) : [];
  orderList.push(newOrder);
  localStorage.setItem('coffeeDeliveyOrderList', JSON.stringify(orderList));
}

export function getOrderById(orderId: string) {
  const arrString: string | null = localStorage.getItem('coffeeDeliveyOrderList');
  const orderList: OrderData[] = arrString ? JSON.parse(arrString) : [];
  const orderById = orderList.find(order => order.id === orderId)
  return orderById;
}

export function getAllOrder() {
  const arrString: string | null = localStorage.getItem('coffeeDeliveyOrderList');
  const orderList: OrderData[] = arrString ? JSON.parse(arrString) : [];
  return orderList;
}

