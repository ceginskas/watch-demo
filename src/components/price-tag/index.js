import React from 'react';
import './styles.scss';

const PriceTag = props => {
  return (
    <div className="price-tag">
      <h3>${props.Price}</h3>
    </div>
  );
};

export default PriceTag;
