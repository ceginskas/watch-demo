import React, { Component } from 'react';
import * as Api from '../../api';

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
    console.log(product);
    return (
      <li>
        {product && (
          <div>
            <h3>
              {
                product.data.elements.filter(item => item.name === 'name')[0]
                  .value
              }
            </h3>
            <p>
              {
                product.data.elements.filter(
                  item => item.name === 'description'
                )[0].value
              }
            </p>
          </div>
        )}
      </li>
    );
  }
}

export default ProductListItem;
