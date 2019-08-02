import React from 'react';

import { Provider } from 'react-redux';
import store from './Store/index'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from './Router/index'

import LayOut from './Components/LayOut/LayOut'
// import Header from './Components/Header/Header';
// import Side from './Components/Side/Side';
import Home from './Pages/Home/Home';


function App() {
  //主面板
  let LayOutRouter = (
    <LayOut>
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </LayOut>
  )
  return (
    <Provider store={store}>
      <Router>
        {/* <div>
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
        </div> */}
        <Switch>
          <Route  path='/login' component={Login}></Route>
          <Route  path='/' render={props => LayOutRouter}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
