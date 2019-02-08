import React, { Component } from 'react';
import './App.scss';
import ProductList from './components/product-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <ProductList />
        </main>
      </div>
    );
  }
}

export default App;
