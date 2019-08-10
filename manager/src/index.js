import React from 'react';
import ReactDOM from 'react-dom';

import "./Assets/css/index.css"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import "nprogress/nprogress.css"

import "bootstrap/dist/js/bootstrap"

import { Provider } from 'react-redux';
import store from './Store/index'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // Provider放在这里而不放在app.js中为了让App这个根组件一开始加载的时候就能同步reducer的信息
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));


serviceWorker.unregister();
