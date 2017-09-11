import '../css/main.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')
render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
root);
