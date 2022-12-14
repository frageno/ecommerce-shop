import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from './components/modules/Shop';
import './styles/index.css';
import Products from './assets/products/products.json'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shop products={Products}/>
  </React.StrictMode>
);
