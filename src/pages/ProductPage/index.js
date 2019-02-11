import React from 'react';
import ProductContainer from '../../components/containers/product-container';

const ProductPage = () => {
  return (
    <div className="product-page">
      <main>
        <div className="wrapper">
          <div className="content">
            <ProductContainer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
