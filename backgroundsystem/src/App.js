import React from 'react';

import { Provider } from 'react-redux';
import store from './Store/index'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './Router/index'

import Header from './Components/Header/Header';
import Side from './Components/Side/Side';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Header />
          <div className="main">
            <Side />
            {
              routes.map( (route,key) => {
                if (route.exact) {
                  return (
                    <Route path={route.path} key={key} exact={route.exact}
                    render = {
                      props =>(
                        // <route.component {...props} routes={route.routes} />
                        <route.component {...props}  />
                      )}
                     ></Route>
                  )
                }else{
                  return (
                    <Route path={route.path} key={key}
                    render={
                      props => (
                        <route.component {...props}/>
                      )}
                    ></Route>
                  )
                }
              })
            }
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
