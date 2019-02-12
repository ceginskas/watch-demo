import React from 'react';
import './styles.scss';

const ProductExtendendInfo = props => {
  const { getProductElement, chosenProduct } = props;
  return (
    <ul className="product-extended-info">
      <li>
        <p>
          {`Article number: ${getProductElement(chosenProduct, 'sku')}`}
        </p>
      </li>
      <li>
        <p>
          {`Color: ${getProductElement(chosenProduct, 'color')}`}
        </p>
      </li>
      <li>
        <p>
          {`Size: ${getProductElement(chosenProduct, 'size')}`}
        </p>
      </li>
    </ul>
  );
};

export default ProductExtendendInfo;
