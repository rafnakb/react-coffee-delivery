import { OrderData } from "./OrderContext";

export function postToLocalStorage(data: OrderData) {
  localStorage.setItem('orderData', JSON.stringify(data));
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