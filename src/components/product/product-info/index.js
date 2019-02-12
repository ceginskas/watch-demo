import React from 'react';
import './styles.scss';
import Image from '../../image';
import ProductHeading from '../product-heading';
import ProductExtendedInfo from '../product-extended-info';
import classNames from 'classnames';

const ProductInfo = props => {
  const { chosenProduct, chosenProductImage } = props;
  if (!chosenProduct.elements) return null;


  const getProductElement = name => {
    const element = chosenProduct.elements.find(item => item.name === name)
      .value;
    return element;
  };

  const productInfoCss = classNames({
    'product-info': true,
    'product-info--is-loaded': !props.isLoading
  });

  return (
    <div className={productInfoCss}>
      <ProductHeading
        Heading={getProductElement('name')}
        Price={getProductElement('price').value}
      />
      <div className="product-info__content">
        <div className="product-info__text">
          <p className="product-info__description">
            {getProductElement('description')}
          </p>
          <ProductExtendedInfo
            getProductElement={name => getProductElement(name)}
          />
        </div>
        <Image chosenProductImage={chosenProductImage} />
      </div>
    </div>
  );
};

export default ProductInfo;
