import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index.js';
import ProductList from '../product-list';

const ProductContainer = props => {
  return (
    <ProductList
      products={props.products}
      loadAllProducts={() => props.loadAllProducts()}
      chosenProduct={props.chosenProduct}
      chosenProductImage={props.chosenProductImage}
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
