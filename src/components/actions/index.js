import * as Api from '../../api';

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
      await Api.assets(foundImage.value.id).then(response => {
        dispatch(getProduct(product, response.data.uri));
      });
    }
  };
}

export function getAllProducts(product) {
  return {
    type: 'GET_ALL_PRODUCTS',
    products: product.data
  };
}

export function getProduct(product, image) {
  return {
    type: 'GET_PRODUCT',
    chosenProduct: product,
    chosenProductImage: image
  };
}
