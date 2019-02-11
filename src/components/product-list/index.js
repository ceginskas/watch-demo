import React, { useState, useEffect } from 'react';
import './styles.scss';
import ProductListItem from '../product-list-item';
import Modal from '../modal';
import ProductInfo from '../product-info';

const ProductList = props => {
  const [modal, setModal] = useState(false);

  const toggleModal = (getProduct = false, product) => {
    setModal(!modal);
    if (getProduct && product) props.loadProduct(product);
  };

  useEffect(() => {
    props.loadAllProducts();
  }, []);

  console.log(props);
  return (
    <div className="product-list">
      <ul>
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
      {modal && (
        <Modal closeModal={() => toggleModal()}>
          <ProductInfo {...props} />
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
