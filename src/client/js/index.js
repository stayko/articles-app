import '../css/main.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

const root = document.getElementById('root')
render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
root);
