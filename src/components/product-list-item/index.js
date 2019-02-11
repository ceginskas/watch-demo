import React from 'react';
import './styles.scss';
import ProductHeading from '../product-heading';

const ProductListItem = props => {
  const { product, openModal } = props;
  if (!product) return null;
  return (
    <li className="product-list-item" onClick={() => openModal(product)}>
      <div className="product-list-item__wrapper">
        <ProductHeading
          Heading={
            product.elements.filter(item => item.name === 'name')[0].value
          }
          IsListItem={true}
          Price={
            product.elements.filter(item => item.name === 'price')[0].value
              .value
          }
        />
      </div>
    </li>
  );
};

export default ProductListItem;
