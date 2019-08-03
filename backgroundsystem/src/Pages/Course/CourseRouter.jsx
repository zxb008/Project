import React, { Component } from 'react';
import {  Route, Switch,Redirect } from "react-router-dom";

//页面
import CourseAdd from './CourseAdd';
import CourseCategory from './CourseCategory';
import CourseList from './CourseList';
import CourseTopic from './CourseTopic';

class CourseRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <Switch>
      <Route path="/course/list" component={CourseList}></Route>
      <Route path="/course/add" component={CourseAdd}></Route>
      <Route path="/course/category" component={CourseCategory}></Route>
      <Route path="/course/topic" component={CourseTopic}></Route>
      <Redirect exact from="/course" to="/course/list"></Redirect>
    </Switch>
     );
  }
}
 
export default CourseRouter;