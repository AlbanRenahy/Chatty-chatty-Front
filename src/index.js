// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


// == Import : local
import App from '../src/components/App';
import store from '../src/store';
import './index.css';

// == Render
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

// React render into the DOM
render(rootComponent, document.getElementById('root'));