import * as Api from '../api';
import * as Type from './types';

export function loadAllProducts() {
  return async dispatch => {
    const response = await Api.products();
    response.data.forEach(async product => {
      const fullProduct = await Api.products(product.id);
      dispatch(getAllProducts(fullProduct));
    });
  };
}

export function loadProduct(product) {
  return async dispatch => {
    const foundImage = product.elements.find(
      item => item.name === 'main_image'
    );
    if (foundImage) {
      dispatch({
        type: Type.requestProduct
      });
      await Api.assets(foundImage.value.id).then(response => {
        dispatch(getProduct(product, response.data.uri));
      });
      dispatch({
        type: Type.recievedProduct
      });
    }
  };
}

export function getAllProducts(product) {
  return {
    type: Type.getAllProducts,
    products: product.data
  };
}

export function getProduct(product, image) {
  return {
    type: Type.getProduct,
    chosenProduct: product,
    chosenProductImage: image
  };
}

export function RequestProduct() {
  return {
    type: Type.requestProduct
  };
}

export function ReceivedProduct() {
  return {
    type: Type.recievedProduct
  };
}
