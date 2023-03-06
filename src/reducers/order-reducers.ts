import { Address, Product } from "../contexts/OrderContext";

export interface OrderData {
  id: string;
  items: Product[];
  address: Address;
  payment: number; // (1: cartão de crédito; 2: cartão débito; 3: dinheiro)
}

export function orderReducer(state: OrderData, action: any) {
  switch (action.type) {
    case 'GET_OPEN_ORDER': {
      let order = getOrder();
      if (order !== undefined) {
        state = order;
      }
      return { ...state }
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

export function putToLocalStorage(data: OrderData) {
  let objString: string | null = localStorage.getItem('coffeeDeliveyOrderData');
  let oldOrder: OrderData = {} as OrderData;
  if (objString !== null) {
    oldOrder = JSON.parse(objString);
  }
  data.items;
  localStorage.setItem('coffeeDeliveyOrderData', JSON.stringify(data));
}

export function deleteOrder() {
  localStorage.removeItem('coffeeDeliveyOrderData');
}

export function postOrderToListOfOrders(data: OrderData) {
  localStorage.setItem('coffeeDeliveyListOfOrder', JSON.stringify(data));
}

