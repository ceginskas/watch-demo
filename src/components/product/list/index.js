import React, { Fragment, useState, useEffect } from 'react';
import './styles.scss';
import ProductListItem from '../list-item';
import Modal from '../../modal';
import ProductInfo from '../info';

const ProductList = props => {
  const [isModalActive, setModal] = useState(false);

  const toggleModal = (getProduct = false, product) => {
    setModal(!isModalActive);
    if (getProduct && product) props.loadProduct(product);
  };

  const getProductElement = (product, name) => {
    const element = product.elements.find(item => item.name === name)
      .value;
    return element;
  };

  useEffect(() => {
    props.loadAllProducts();
  }, []);

  return (
    <Fragment>
      <ul className="product-list">
        {props.products &&
          props.products.map((product, index) => {
            return (
              <ProductListItem
                key={index}
                product={product}
                openModal={product => toggleModal(true, product)}
                getProductElement={(product, element) => getProductElement(product, element)}
              />
            );
          })}
      </ul>
      {isModalActive &&
        <Modal closeModal={() => toggleModal()}>
          <ProductInfo {...props} getProductElement={(product, element) => getProductElement(product, element)} />
        </Modal>
      }

    </Fragment>
  );
};

export default ProductList;
