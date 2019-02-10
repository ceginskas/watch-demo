import React, { Component } from 'react';
import * as Api from '../../api';
import './styles.scss';
import ProductHeading from '../product-heading';

class ProductListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };
  }

  getProduct(id) {
    Api.products(id).then(data => this.setState({ product: data }));
  }

  componentDidMount() {
    this.getProduct(this.props.id);
  }

  render() {
    const { product } = this.state;
    if (!product) return null;
    return (
      <li
        className="product-list-item"
        onClick={() => this.props.toggleModal(product)}
      >
        <div className="product-list-item__wrapper">
          <ProductHeading
            Heading={
              product.data.elements.filter(item => item.name === 'name')[0]
                .value
            }
            Price={
              product.data.elements.filter(item => item.name === 'price')[0]
                .value.value
            }
          />
        </div>
      </li>
    );
  }
}

export default ProductListItem;
