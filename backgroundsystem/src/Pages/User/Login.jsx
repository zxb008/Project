import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfoAction } from '../../Store/actionCreators'
import md5 from 'md5'

const S_KEY = 'WaYjH1314.ItLikE.CoM';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            user_pwd: ''
        }
    }
    render() {
        return (
            <div className="login">
                <div className="login-wrap">

                    <div className="col-md-offset-1 col-md-10">
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon">
                                <i className="fa fa-id-card-o"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="账户" 
                            name="user_name"
                            onChange={this._onInputChange}
                            onKeyUp={this._onInputKeyUp}
                            />
                        </div>
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon">
                                <i className="fa fa-key"></i>
                            </span>
                            <input type="password" className="form-control" placeholder="密码"
                             name="user_pwd"
                            onChange={this._onInputChange}
                            onKeyUp={this._onInputKeyUp}
                            />
                        </div>
                        <button type="submit" onClick={this._onSubmit} className="btn btn-lg btn-danger btn-block">登 录</button>
                    </div>
                </div>
            </div>
        );
    }
    //输入框的值改变
    _onInputChange =(e)=>{
        let name = e.target.name,
        value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    //回车
    _onInputKeyUp =(e)=>{
        if(e.keyCode === 13){
            this._onSubmit();
        }
    }
    //提交
    _onSubmit =()=>{
         // 3.1 获取数据
         const {user_name, user_pwd} = this.state;
         // 3.2 验证数据
         if(!user_name){
             alert("输入的口令不能为空！");
             return;
         }
         if(!user_pwd){
             alert("输入的密码不能为空！");
             return;
         }
 
         // 3.3 密码的加密
         const md5_user_pwd = md5(user_pwd + S_KEY);
         console.log(md5_user_pwd);
         
    }
}
// const mapStateToProps = (state) =>{
//     return {
//         userInfo: state.userInfo
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        reqLogin(data, callback) {
            const action = getUserInfoAction(data, callback);
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(Login);