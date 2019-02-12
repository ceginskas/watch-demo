import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import ProductList from '../components/product/list';

const ProductContainer = props => {
  const { productReducer } = props;
  return (
    <ProductList
      isLoading={props.isLoading}
      products={productReducer.products}
      loadAllProducts={() => props.loadAllProducts()}
      chosenProduct={productReducer.chosenProduct}
      chosenProductImage={productReducer.chosenProductImage}
      loadProduct={product => props.loadProduct(product)}
    />
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(ProductContainer);
