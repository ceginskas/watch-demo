import React from 'react';
import './styles.scss';

const ProductExtendendInfo = props => {
  console.log(props);
  return (
    <div className="product-extended-info">
      <ul>
        <li>
          <p>
            Article number:{' '}
            <span>
              {props.elements.filter(item => item.name === 'sku')[0].value}
            </span>
          </p>
        </li>
        <li>
          <p>
            Color:{' '}
            <span>
              {props.elements.filter(item => item.name === 'color')[0].value}
            </span>
          </p>
        </li>
        <li>
          <p>
            Size:{' '}
            <span>
              {props.elements.filter(item => item.name === 'size')[0].value}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ProductExtendendInfo;
