import { Export } from "phosphor-react";
import { DeliveryAddress, Product } from "../contexts/OrderContext";
import { ProductModel } from "../pages/Home/components/Products";

export enum ActionsTypes {
  /* 
    Products Actions
  */
  GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',

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

export function getAllProductsAction(allProducts: ProductModel[]) {
  return {
    type: ActionsTypes.GET_ALL_PRODUCTS,
    payload: {
      products: allProducts,
    }
  }
}

export function filterProductsAction(allProducts: ProductModel[], filteredTag: string) {
  return {
    type: ActionsTypes.FILTER_PRODUCTS,
    payload: {
      products: allProducts,
      tags: filteredTag,
    }
  }
}

export function getOpenOrderAction() {
  return {
    type: ActionsTypes.GET_OPEN_ORDER,
  }
}

export function addProductsToOrderAction(item: Product) {
  return {
    type: ActionsTypes.ADD_PRODUCTS_TO_ORDER,
    payload: {
      item: item
    }
  }
}

export function incrementQuantityOfProductAction(productId: number) {
  return {
    type: ActionsTypes.INCREMENT_QUANTITY_OF_PRODUCT,
    payload: {
      id: productId
    }
  }
}

export function decrementQuantityOfProductAction(productId: number) {
  return {
    type: ActionsTypes.DECREMENT_QUANTITY_OF_PRODUCT,
    payload: {
      id: productId
    }
  }
}

export function removeProductsToOrderAction(productId: number) {
  return {
    type: ActionsTypes.REMOVE_PRODUCTS_TO_ORDER,
    payload: {
      id: productId
    }
  }
}

export function updateAddressAction(addressData: DeliveryAddress) {
  return {
    type: ActionsTypes.UPDATE_ADDRESS,
    payload: {
      address: addressData
    }
  }
}

export function updatePaymentAction(paymentId: number) {
  return {
    type: ActionsTypes.UPDATE_PAYMENT,
    payload: {
      paymentId: paymentId
    }
  }
}

export function confirmOrderAction(deliveryPrice: number, totalPrice: number) {
  return {
    type: ActionsTypes.CONFIRM_ORDER,
    payload: {
      delivery: deliveryPrice,
      total: totalPrice
    }
  }
}

export function resetOrderAction() {
  return {
    type: ActionsTypes.RESET_ORDER,
  }
}