import React, { Fragment, useState, useEffect } from 'react';
import './styles.scss';
import ProductListItem from '../product-list-item';
import Modal from '../../modal';
import ProductInfo from '../product-info';

const ProductList = props => {
  const [isModalActive, setModal] = useState(false);

  const toggleModal = (getProduct = false, product) => {
    setModal(!isModalActive);
    if (getProduct && product) props.loadProduct(product);
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
              />
            );
          })}
      </ul>
      {isModalActive && (
        <Modal closeModal={() => toggleModal()}>
          <ProductInfo {...props} />
        </Modal>
      )}
    </Fragment>
  );
};

export default ProductList;
