import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import avatar from '../../Assets/uploads/avatar.png'
class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="aside">
                <div className="profile">
                    <div className="avatar img-circle">
                        <img src={avatar} />
                    </div>
                    <h4>旋之华</h4>
                </div>
                <div className="navs">
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/" className="active">
                                <i className="fa fa-area-chart"></i>
                                数据分析
                            </Link>
                        </li>
                        <li>
                            <Link to="/user">
                                <i className="fa fa-users"></i>
                                用户中心
                            </Link>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i className="fa fa-object-group"></i>
                                课程管理
                                <i className="arrow fa fa-angle-right"></i>
                            </a>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/course/add">
                                    {/* <Link to="/course/add"> */}
                                        课程添加
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/list">
                                    {/* <Link to="/course/list"> */}
                                        课程列表
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/category">
                                    {/* <Link to="/course/category"> */}
                                        课程分类
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/course/topic">
                                    {/* <Link to="/course/topic"> */}
                                        课程专题
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="docent_list.html">
                                <i className="fa fa-bars"></i>
                                运营中心
                            </a>
                        </li>
                        <li>
                            {/* <Link to="/sowing/list"> */}
                            <Link to="/sowing/list">
                                <i className="fa fa-calculator"></i>
                                轮播图中心
                            </Link>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i className="fa fa-cog"></i>
                                设置中心
                                <i className="arrow fa fa-angle-right"></i>
                            </a>
                            <ul className="list-unstyled">
                                <li><a href="javascript:;">站点设置</a></li>
                                <li><a href="javascript:;">用户设置</a></li>
                                <li><a href="javascript:;">角色管理</a></li>
                                <li><a href="javascript:;">课程设置</a></li>
                                <li><a href="javascript:;">运营设置</a></li>
                                <li><a href="javascript:;">财务设置</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    );
  }
}

export default Side;