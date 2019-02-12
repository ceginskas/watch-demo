import React, { Component } from 'react';
import './framework/scss/globals.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './framework/layouts';
import ProductPage from './pages/ProductPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Route exact path="/" component={ProductPage} />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
