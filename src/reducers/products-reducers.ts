import { ActionsTypes } from "./actions";

export interface ProductsData {
  id: number,
  tags: string[],
  name: string,
  description: string,
  price: number,
  imageUrl: string
}

export function productsReducers(state: ProductsData[], action: any) {
  switch (action.type) {
    case ActionsTypes.GET_ALL_PRODUCTS: {
      return action.payload.products;
    }
    case ActionsTypes.FILTER_PRODUCTS: {
      const updateList = action.payload.products.filter((product: any) => {
        return product.tags.some((value: any) => action.payload.tags.includes(value));
      })
      return updateList;
    }
    default:
      return state;
  }
}
