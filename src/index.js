import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './components/Home';
import Nav from './components/Nav';
import ProductListing from './components/ProductListing';

render(
  <BrowserRouter>
    <App>
      <main>
        <Nav />
        <Home>
          <Route exact path="/" component={ProductListing} />
        </Home>
      </main>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)