let defaultState = {
  products: [],
  chosenProduct: [],
  chosenProductImage: ''
};

const productReducer = (state = defaultState, action) => {
  if (action.type === 'GET_ALL_PRODUCTS') {
    return {
      ...state,
      products: [...state.products, action.products]
    };
  } else if (action.type === 'GET_PRODUCT') {
    return {
      ...state,
      chosenProduct: action.chosenProduct,
      chosenProductImage: action.chosenProductImage
    };
  } else {
    return {
      ...state
    };
  }
};

export default productReducer;
