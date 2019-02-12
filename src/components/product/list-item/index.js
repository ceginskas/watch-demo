import React from 'react';
import './styles.scss';
import ProductHeading from '../heading';

const ProductListItem = props => {
  const { product, openModal } = props;
  if (!product) return null;
  return (
    <li className="product-list-item" onClick={() => openModal(product)}>
      <div className="product-list-item__wrapper">
        <ProductHeading
          Heading={
            product.elements.find(item => item.name === 'name').value
          }
          Modifiers={{ 'product-heading--is-list-item': true }}
          Price={
            product.elements.find(item => item.name === 'price').value
              .value
          }
        />
      </div>
    </li>
  );
};

export default ProductListItem;
