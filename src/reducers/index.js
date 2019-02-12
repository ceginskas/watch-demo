let defaultState = {
  products: [],
  chosenProduct: [],
  chosenProductImage: ''
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return {
        ...state,
        products: [...state.products, action.products]
      };

    case 'GET_PRODUCT':
      return {
        ...state,
        chosenProduct: action.chosenProduct,
        chosenProductImage: action.chosenProductImage
      };
  }
};

export default productReducer;
