import { ADD_PRODUCT, DELETE_PRODUCT, LOAD_PRODUCT, SINGLE_PRODUCT, SORT_BY_FIRST_LAST_UPLOAD, UPDATE_PRODUCT } from "../Types/ProductType"


export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}
export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
}
export const updateProduct = (id) => {
  return {
    type: UPDATE_PRODUCT,
    payload: id
  }
}

export const loadProduct = (product) => {
  return {
    type: LOAD_PRODUCT,
    payload: product,
  };
};
export const singleProduct = (product) => {
  return {
    type: SINGLE_PRODUCT,
    payload: product,
  };
};
export const sortByFirstLastUpload = (key) => {

  return {
    type: SORT_BY_FIRST_LAST_UPLOAD,
    payload: key
  };
};
