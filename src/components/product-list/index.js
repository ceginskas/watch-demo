import React, { Component } from 'react';
import * as Api from '../../api';
import './styles.scss';
import ProductListItem from '../product-list-item';
import Modal from '../modal';
import withModalInfo from '../containers/withModalInfo';
import ProductInfo from '../product-info';

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
              return (
                <ProductListItem
                  key={index}
                  {...product}
                  {...this.props}
                  getTest={data => this.getTest(data)}
                />
              );
            })}
        </ul>
        {this.props.modalIsOpen && (
          <Modal closeModal={this.props.toggleModal}>
            <ProductInfo {...this.props.modalInfo} />
          </Modal>
        )}
      </div>
    );
  }
}

export default withModalInfo(ProductList);
