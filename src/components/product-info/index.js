import React from 'react';
import './styles.scss';

const ProductInfo = props => {
  console.log(props.data);
  const { elements } = props.data;
  console.log(elements);
  return (
    <div className="product-info">
      <h2> {elements.filter(item => item.name === 'name')[0].value}</h2>
      <p>{elements.filter(item => item.name === 'description')[0].value}</p>
      <p>
        Price:{' $'}
        <span>
          {elements.filter(item => item.name === 'price')[0].value.value}
        </span>
      </p>
      <p>
        Article number:{' '}
        <span>{elements.filter(item => item.name === 'sku')[0].value}</span>
      </p>
      <p>
        Size:{' '}
        <span>{elements.filter(item => item.name === 'size')[0].value}</span>
      </p>
      <p>
        Color:{' '}
        <span>{elements.filter(item => item.name === 'color')[0].value}</span>
      </p>
    </div>
  );
};

export default ProductInfo;
