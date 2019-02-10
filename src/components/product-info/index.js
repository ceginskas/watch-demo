import React, { useState } from 'react';
import './styles.scss';
import Image from '../image';
import classNames from 'classnames';
import ProductHeading from '../product-heading';
import ProductExtendedInfo from '../product-extended-info';

const ProductInfo = props => {
  const { elements } = props.data;

  const [contentLoaded, setContentLoaded] = useState(false);

  const productInfoContentCss = classNames({
    'product-info__content': true,
    'product-info__content--is-loaded': contentLoaded
  });

  const handleLoadedContent = () => {
    setTimeout(function() {
      setContentLoaded(!contentLoaded);
    }, 150);
  };

  return (
    <div className="product-info">
      <ProductHeading
        Heading={elements.filter(item => item.name === 'name')[0].value}
        Price={elements.filter(item => item.name === 'price')[0].value.value}
      />
      <div className={productInfoContentCss}>
        <div className="product-info__text">
          <p className="product-info__description">
            {elements.filter(item => item.name === 'description')[0].value}
          </p>
          <ProductExtendedInfo elements={elements} />
        </div>
        <Image
          {...elements.filter(item => item.name === 'main_image')[0].value}
          contentLoaded={() => handleLoadedContent()}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
