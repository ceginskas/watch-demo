import React, { Component } from 'react';
import './framework/scss/globals.scss';
import Layout from './framework/layouts';
import ProductPage from './pages/ProductPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <ProductPage />
        </Layout>
      </div>
    );
  }
}

export default App;
