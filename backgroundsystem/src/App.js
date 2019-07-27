import React from 'react';

import { Provider } from 'react-redux';
import store from './Store/index'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Components/Header/Header';
import Side from './Components/Side/Side';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Header/>
          <Side/>
       </div>
      </Provider>
    </Router>
  );
}

export default App;
