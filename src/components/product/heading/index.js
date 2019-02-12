import React from 'react';
import './styles.scss';
import classNames from 'classnames';
import PriceTag from '../price-tag';

const ProductHeading = props => {
  const headingCss = classNames({
    'product-heading': true,
    ...props.Modifiers
  });

  return (
    <div className={headingCss}>
      <div className="product-heading__title">
        <h3>{props.Heading}</h3>
      </div>

      <PriceTag {...props} />
    </div>
  );
};

export default ProductHeading;
