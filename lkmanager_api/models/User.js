import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/lk_data');
 
const userSchema = new mongoose.Schema({
  real_name:{type:String,required:false},
  user_name:{type:String,required:true},
  user_pwd:{type:String,required:true},
  icon_url:{type:String,required:false},
  sex:{type:String,required:false},
  phone:{type:String,required:false},
  e_mail:{type:String,required:false},
  join_time:{type:Date,required:false},
  intro_self:{type:String,required:false},
  c_time:{type:Date,default:Date.now},
  l_time:{type:Date,default:Date.now}
})

const User = mongoose.model('User',userSchema,'User');
export default  User;