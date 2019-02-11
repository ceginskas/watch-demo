import * as Api from '../../api';

export function loadAllProducts() {
  return dispatch => {
    Api.products().then(response => {
      for (let i = 0; i < response.data.length; i++) {
        Api.products(response.data[i].id).then(response => {
          dispatch(getAllProducts(response));
        });
      }
    });
  };
}

export function loadProduct(product) {
  return dispatch => {
    Api.assets(
      product.elements.filter(item => item.name === 'main_image')[0].value.id
    ).then(response => {
      dispatch(getProduct(product, response.data.uri));
    });
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
