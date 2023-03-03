import { OrderData } from "../contexts/OrderContext";

export enum ActionsTypes {
  CREATE_NEW_ORDER = 'CREATE_NEW_ORDER',
  INCREMENT_QUANTITY_OF_PRODUCT = 'INCREMENT_QUANTITY_OF_PRODUCT',
  DECREMENT_QUANTITY_OF_PRODUCT = 'DECREMENT_QUANTITY_OF_PRODUCT',
  UPDATE_ORDER = 'UPDATE_ORDER',
  DELETE_ITEMS_FROM_CART = 'DELETE_ITEMS_FROM_CART'
}

export function addNewOrder(newOrder: OrderData) {
  return {
    type: ActionsTypes.CREATE_NEW_ORDER,
    payload: {

    }
  }
}