import React from 'react';
import ProductList from '../../components/product-list';

const ProductPage = () => {
  return (
    <div className="product-page">
      <main>
        <div className="wrapper">
          <div className="content">
            <ProductList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
