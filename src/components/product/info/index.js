import React from 'react';
import './styles.scss';
import Image from '../../image';
import ProductHeading from '../heading';
import ProductExtendedInfo from '../extended-info';
import classNames from 'classnames';

const ProductInfo = props => {
  const { chosenProduct, chosenProductImage, getProductElement } = props;
  if (!chosenProduct.elements) return null;


  const productInfoCss = classNames({
    'product-info': true,
    'product-info--is-loaded': !props.isLoading
  });

  return (
    <div className={productInfoCss}>
      <div className="product-info__content">
        <div className="product-info__text">
          <ProductHeading
            Heading={getProductElement(chosenProduct, 'name')}
            Price={getProductElement(chosenProduct, 'price').value}
          />
          <p className="product-info__description">
            {getProductElement(chosenProduct, 'description')}
          </p>
          <ProductExtendedInfo
            {...props}
          />
        </div>
        <Image chosenProductImage={chosenProductImage} />
      </div>
    </div>
  );
};

export default ProductInfo;
