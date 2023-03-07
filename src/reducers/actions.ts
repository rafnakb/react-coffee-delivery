import { Export } from "phosphor-react";

export enum ActionsTypes {
  /* 
    Products Actions
  */
  GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
  FILTERED_PRODUCTS = 'FILTERED_PRODUCTS',

  /* 
    Order Actions
  */
  GET_OPEN_ORDER = 'GET_OPEN_ORDER',
  ADD_PRODUCTS_TO_ORDER = 'ADD_PRODUCTS_TO_ORDER',
  INCREMENT_QUANTITY_OF_PRODUCT = 'INCREMENT_QUANTITY_OF_PRODUCT',
  DECREMENT_QUANTITY_OF_PRODUCT = 'DECREMENT_QUANTITY_OF_PRODUCT',
  REMOVE_PRODUCTS_TO_ORDER = 'REMOVE_PRODUCTS_TO_ORDER',
  UPDATE_ADDRESS = 'UPDATE_ADDRESS',
  UPDATE_PAYMENT = 'UPDATE_PAYMENT',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
  RESET_ORDER = 'RESET_ORDER',
}

export function getOpenOrder() {
  return {
    type: ActionsTypes.GET_OPEN_ORDER,
  }
}

export function addProductsToOrder() {
  return {
    type: ActionsTypes.ADD_PRODUCTS_TO_ORDER,
  }
}

export function incrementQuantityOfProduct() {
  return {
    type: ActionsTypes.INCREMENT_QUANTITY_OF_PRODUCT,
  }
}

export function decrementQuantityOfProduct() {
  return {
    type: ActionsTypes.DECREMENT_QUANTITY_OF_PRODUCT,
  }
}

export function removeProductsToOrder() {
  return {
    type: ActionsTypes.REMOVE_PRODUCTS_TO_ORDER,
  }
}

export function updateAddress() {
  return {
    type: ActionsTypes.UPDATE_ADDRESS,
  }
}

export function updatePayment() {
  return {
    type: ActionsTypes.UPDATE_PAYMENT,
  }
}

export function confirmOrder() {
  return {
    type: ActionsTypes.CONFIRM_ORDER,
  }
}

export function resetOrder() {
  return {
    type: ActionsTypes.RESET_ORDER,
  }
}