import Home from '../Pages/Home/Home';
import User from '../Pages/User/User';
import Mine from '../Pages/Mine/Mine';

let routes = [
  {path:'/',component:Home,exact:true},
  {path:'/user',component:User},
  {path:'/mine',component:Mine},
]

export default routes;