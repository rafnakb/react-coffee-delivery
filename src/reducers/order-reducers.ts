import { DeliveryAddress, Product } from "../contexts/OrderContext";

export interface OrderData {
  id: string;
  items: Product[];
  address: DeliveryAddress;
  payment: number; // (1: cartão de crédito; 2: cartão débito; 3: dinheiro)
  // isValid: boolean;
}

export function orderReducer(state: OrderData, action: any) {
  switch (action.type) {
    case 'ADD_PRODUCTS_TO_ORDER': {
      const index = state.items.findIndex((item) => item.id === action.payload.item.id);

      if (index === -1) {
        return { ...state, items: [...state.items, action.payload.item] }
      } else {
        const mergedItems = state.items.map((item) => item.id === action.payload.item.id ?
          { ...item, quantity: item.quantity + action.payload.item.quantity } : item)
        return { ...state, items: mergedItems }
      }
    }
    case 'INCREMENT_QUANTITY_OF_PRODUCT': {
      const listWithIncrementedItems = state.items.map((item) => item.id === action.payload.id ?
        { ...item, quantity: item.quantity + 1 } : item)
      return { ...state, items: listWithIncrementedItems }
    }
    case 'DECREMENT_QUANTITY_OF_PRODUCT': {
      const listWithDecrmentedItems = state.items.map((item) => item.id === action.payload.id ?
        { ...item, quantity: item.quantity - 1 } : item)
      return { ...state, items: listWithDecrmentedItems }
    }
    case 'REMOVE_PRODUCTS_TO_ORDER': {
      const listWithRemovedProduct = state.items.filter((item) => {
        return item.id !== action.payload.id;
      })
      return { ...state, items: listWithRemovedProduct }
    }
    default:
      return state;
  }
}

/* 
  Local Storage CRUD
*/

export function postToLocalStorage(data: OrderData) {
  localStorage.setItem('coffeeDeliveyOrderData', JSON.stringify(data));
}

export function putToLocalStorage(data: OrderData) {
  let objString: string | null = localStorage.getItem('orderData');
  let oldOrder: OrderData = {} as OrderData;
  if (objString !== null) {
    oldOrder = JSON.parse(objString);
  }
  data.items;
  localStorage.setItem('orderData', JSON.stringify(data));
}

export function deleteToLocalStorage() {
  localStorage.removeItem('orderData');
}


interface Item {
  id: number;
  name: string;
  quantity: number;
}

// Lista inicial de itens
const itemList: Item[] = [
  { id: 1, name: 'Item 1', quantity: 5 },
  { id: 2, name: 'Item 2', quantity: 10 },
  { id: 3, name: 'Item 3', quantity: 2 },
];

