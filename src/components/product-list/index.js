import React, { Component } from 'react';
import * as Api from '../../api';
import ProductListItem from '../product-list-item';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    };
  }

  getProducts() {
    Api.products().then(data => this.setState({ products: data }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="product-list">
        <ul>
          {this.state.products &&
            this.state.products.total > 0 &&
            this.state.products.data.map((product, index) => {
              return <ProductListItem key={index} {...product} />;
            })}
        </ul>
      </div>
    );
  }
}

export default ProductList;
