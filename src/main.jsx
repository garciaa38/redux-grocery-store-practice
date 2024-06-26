import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { populateProduce } from './store/produce';
import { addProduce } from './store/cart';
import configureStore from './store/index';
import App from './App';
import './index.css';

const store = configureStore();

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
  window.addProduce = addProduce;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

