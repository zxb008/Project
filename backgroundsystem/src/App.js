import React from 'react';



import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import LayOut from './Components/LayOut/LayOut';
import Login from './Pages/User/Login';

import Home from './Pages/Home/Home';
import User from './Pages/User/User';
import Mine from './Pages/Mine/Mine';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

import SowingRouter from './Pages/Rotation/SowingRouter';
import CourseRouter from './Pages/Course/CourseRouter';


function App() {
  //主面板
  let LayOutRouter = (
    <LayOut>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/user' component={User}></Route>
        <Route path='/mine' component={Mine}></Route>
        <Route path='/sowing' component={SowingRouter}></Route>
        <Route path='/course' component={CourseRouter}></Route>
        <Route component={ErrorPage}/>
      </Switch>
    </LayOut>
  )
  return (
   
      <Router>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' render={props => LayOutRouter}></Route>
        </Switch>
      </Router>
   
  );
}

export default App;
