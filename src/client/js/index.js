import '../css/main.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux';
import store, { history } from './store'

const root = document.getElementById('root')
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App/>
    </ConnectedRouter>
  </Provider>,
root);
