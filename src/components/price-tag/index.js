import React from 'react';
import './styles.scss';

const PriceTag = props => {
  return <span className="price-tag">${props.Price}</span>;
};

export default PriceTag;
