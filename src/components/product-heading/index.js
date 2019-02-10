import React from 'react';
import './styles.scss';
import classNames from 'classnames';
import PriceTag from '../price-tag';

const ProductHeading = props => {
  const headingCss = classNames({
    'product-heading': true,
    'product-heading--is-list-item': props.IsListItem
  });

  return (
    <div className={headingCss}>
      <h3>
        {props.Heading}
        <PriceTag {...props} />
      </h3>
    </div>
  );
};

export default ProductHeading;
