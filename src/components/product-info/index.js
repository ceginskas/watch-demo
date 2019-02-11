import React from 'react';
import './styles.scss';
import Image from '../image';
import ProductHeading from '../product-heading';
import ProductExtendedInfo from '../product-extended-info';

const ProductInfo = props => {
  const { chosenProduct, chosenProductImage } = props;
  if (!chosenProduct.elements) return null;

  return (
    <div className="product-info">
      <ProductHeading
        Heading={
          chosenProduct.elements.filter(item => item.name === 'name')[0].value
        }
        Price={
          chosenProduct.elements.filter(item => item.name === 'price')[0].value
            .value
        }
      />
      <div className="product-info__content">
        <div className="product-info__text">
          <p className="product-info__description">
            {
              chosenProduct.elements.filter(
                item => item.name === 'description'
              )[0].value
            }
          </p>
          <ProductExtendedInfo {...chosenProduct} />
        </div>
        <Image chosenProductImage={chosenProductImage} />
      </div>
    </div>
  );
};

export default ProductInfo;
