import React from 'react';

const ProductExtendendInfo = props => {
  console.log(props);
  return (
    <div className="product-extended-info">
      <p>
        Article number:{' '}
        <span>
          {props.elements.filter(item => item.name === 'sku')[0].value}
        </span>
      </p>
      <p>
        Size:{' '}
        <span>
          {props.elements.filter(item => item.name === 'size')[0].value}
        </span>
      </p>
      <p>
        Color:{' '}
        <span>
          {props.elements.filter(item => item.name === 'color')[0].value}
        </span>
      </p>
    </div>
  );
};

export default ProductExtendendInfo;
