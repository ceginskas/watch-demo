import { combineReducers } from 'redux';
import * as Type from '../actions/types';

let defaultState = {
  products: [],
  chosenProduct: [],
  chosenProductImage: ''
};
const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Type.getAllProducts:
      return {
        ...state,
        products: [...state.products, action.products]
      };

    case Type.getProduct:
      return {
        ...state,
        chosenProduct: action.chosenProduct,
        chosenProductImage: action.chosenProductImage
      };

    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case Type.requestProduct:
      return true;
    case Type.recievedProduct:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  productReducer,
  isLoading
});
