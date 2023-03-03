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

      // Função que mescla o novo item à lista existente e soma as quantidades
      // Encontra o índice do item com o mesmo ID na lista
      const index = state.items.findIndex((item) => item.id === action.payload.item.id);

      if (index === -1) {
        const updatedOrder = [...state.items, action.payload.item];
        return; state
      } else {
        const updatedOrder = state.items.map((item) =>
          item.id === action.payload.item.id ? { ...item, quantity: item.quantity + action.payload.item.quantity } : item
        );
        return state;
      }
      // const updatedOrder = { ...state, items: action.payload.items }
    }
    case 'INCREMENT_QUANTITY_OF_PRODUCT': {

      return state;
    }
    case 'DECREMENT_QUANTITY_OF_PRODUCT': {

      return state;
    }
    default:
      return state;
  }
} // Em TS, mesclar objeto a uma lista de objetos existentes e somar valores do arumento?

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

// Novo item a ser adicionado à lista
const newItem: Item = { id: 2, name: 'Item 4', quantity: 3 };

// Função que mescla o novo item à lista existente e soma as quantidades
function mergeItemToList(list: Item[], newItem: Item): Item[] {
  // Encontra o índice do item com o mesmo ID na lista
  const index = list.findIndex((item) => item.id === newItem.id);

  if (index === -1) {
    // Caso o item não exista na lista, simplesmente adiciona o novo item
    return [...list, newItem];
  } else {
    // Caso contrário, mescla o novo item ao item existente, somando as quantidades
    return list.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item
    );
  }
}

// Testa a função com o novo item
const mergedList = mergeItemToList(itemList, newItem);
console.log(mergedList);
// Saída: [
//   { id: 1, name: 'Item 1', quantity: 5 },
//   { id: 2, name: 'Item 2', quantity: 13 },
//   { id: 3, name: 'Item 3', quantity: 2 },
// ]

