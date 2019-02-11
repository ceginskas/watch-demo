import React from 'react';
import './styles.scss';

const ProductExtendendInfo = props => {
  return (
    <ul className="product-extended-info">
      <li>
        <p>
          Article number: <span>{props.getProductElement('sku')}</span>
        </p>
      </li>
      <li>
        <p>
          Color: <span>{props.getProductElement('color')}</span>
        </p>
      </li>
      <li>
        <p>
          Size: <span>{props.getProductElement('size')}</span>
        </p>
      </li>
    </ul>
  );
};

export default ProductExtendendInfo;
