import React from 'react';
import './styles.scss';

const ProductHeading = props => {
  return (
    <div className="product-heading">
      <h3>
        {props.Heading} <span className="price-tag">${props.Price}</span>
      </h3>
    </div>
  );
};

export default ProductHeading;
