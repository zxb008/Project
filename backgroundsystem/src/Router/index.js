import Home from '../Pages/Home/Home';
import User from '../Pages/User/User';
import Mine from '../Pages/Mine/Mine';
import SowingList from '../Pages/Rotation/SowingList';
import SowingAdd from '../Pages/Rotation/SowingAdd'

import CourseAdd from '../Pages/Course/CourseAdd'
import CourseCategory from '../Pages/Course/CourseCategory'
import CourseList from '../Pages/Course/CourseList'
import CourseTopic from '../Pages/Course/CourseTopic'

let routes = [
  {path:'/',component:Home,exact:true},
  {path:'/user',component:User},
  {path:'/mine',component:Mine},
  {path:'/sowinglist',component:SowingList},
  {path:'/sowingadd',component:SowingAdd},

  {path: '/courseadd', component: CourseAdd},
  {path: '/coursecategory', component: CourseCategory},
  {path: '/courselist', component: CourseList},
  {path: '/coursetopic', component: CourseTopic},
]

export default routes;