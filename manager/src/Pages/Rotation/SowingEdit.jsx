import React, {Component} from 'react';
import {editSowingData} from '../../api/index'
import { Link } from "react-router-dom";

const IMG_PRE = 'http://localhost:1688/uploads/';

class SowingEdit extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.location.state);
        // 要修改的原始数据
        const sowing = this.props.location.state.sowing;//路由传递过来的数据
        this.state = {
            id: sowing._id,
            image_title: sowing.image_title,
            image_url: IMG_PRE + sowing.image_url,
            image_small_url:  IMG_PRE + sowing.image_small_url,
            image_link: sowing.image_link,
            s_time: sowing.s_time,
            e_time: sowing.e_time,
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="body teacher-profile">
                    <ol className="breadcrumb">
                        <li><Link to="/sowing/list">轮播图管理</Link></li>
                        <li className="active">编辑轮播图</li>
                    </ol>
                    <div className="settings">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">图片名称</label>
                                <div className="col-md-5">
                                    <input
                                        ref="image_title"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="填写图片名称"
                                        value = {this.state.image_title}
                                        onChange={(e)=>this._dealInputValue(e, 'image_title')}
                                    />
                                </div>
                            </div>
                            {/*大图*/}
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">大图</label>
                                <div className="col-md-2 preview">
                                    <img src={this.state.image_url} style={{border: 1}} />
                                    <input
                                        ref="image_url"
                                        type="file"
                                        className="form-control input-sm"
                                        placeholder="选择小图片"
                                        onChange={()=>this._previewImg('image_url')}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            {/*小图*/}
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">小图</label>
                                <div className="col-md-2 preview">
                                    <img src={this.state.image_small_url} style={{border: 1}} />
                                    <input
                                        ref="image_small_url"
                                        type="file"
                                        className="form-control input-sm"
                                        placeholder="选择大图片"
                                        onChange={()=>this._previewImg('image_small_url')}
                                    />
                                    <div className="cover">
                                        <i className="fa fa-upload"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">跳转页面链接</label>
                                <div className="col-md-5">
                                    <input
                                        ref="image_link"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="填写跳转链接"
                                        value={this.state.image_link}
                                        onChange={(e)=>this._dealInputValue(e, 'image_link')}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">计划上架时间</label>
                                <div className="col-md-5">
                                    <input
                                        ref="s_time"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="请填写上架的链接"
                                        value = {this.state.s_time.substr(0, 10)}
                                        onChange={(e)=>this._dealInputValue(e, 's_time')}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="col-md-3 control-label">计划下架时间</label>
                                <div className="col-md-5">
                                    <input
                                        ref="e_time"
                                        type="text"
                                        className="form-control input-sm"
                                        placeholder="请填写下架的链接"
                                        value = {this.state.e_time.substr(0, 10)}
                                        onChange={(e)=>this._dealInputValue(e, 'e_time')}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-8">
                                    <button onClick={()=>this._dealWithClick()} className="btn btn-danger btn-sm pull-right">确认修改</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 处理文本内容的改变
    _dealInputValue(e, type){
        // console.log(e.target.value);
        const val = e.target.value;
        if(type === 'image_title'){
            this.setState({
                image_title: val
            })
        }else if(type === 'image_link'){
            this.setState({
                image_link: val
            })
        }else if(type === 's_time'){
            this.setState({
                s_time: val
            })
        }else if(type === 'e_time'){
            this.setState({
                e_time: val
            })
        }
    }

    // 处理图片内容的展示
    _previewImg(imgRef){
        // 1. 根据ref获取用户上传的文件
        let file = this.refs[imgRef].files[0];
        console.log(file);

        // 2. 创建FileReader的实例来，修改图片的信息
        let src = '';
        const reader = new FileReader();
        if(file){
          //FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL。
          //Data URL是一项特殊的技术，可以将资料(例如图片)内嵌在网页之中，不用放到外部文件。
          //使用Data URL的好处是，您不需要额外再发出一个HTTP 请求到服务器端取得额外的资料；
          //而缺点便是，网页的大小可能会变大。它适合应用在内嵌小图片，不建议将大图像文件编码成Data URL来使用。
          //您的图像文件不能够超过浏览器限定的大小，否则无法读取图像文件。
          
            reader.readAsDataURL(file);//将读取的文件转换成base64格式
        }else {
            src = '';
        }
        // 阅读器已经解析完毕
        reader.onloadend = ()=>{
            src = reader.result;//转换后的文件数据存储在result中
            // 判断
            if(imgRef === 'image_url'){
                this.setState({
                    image_url: src
                })
            }else {
                this.setState({
                    image_small_url: src
                })
            }

        }
    }

    // 点击修改按钮
    _dealWithClick(){
         // 1. 处理请求的数据
         const {id, image_title, image_link, s_time, e_time} = this.state;
         //  2. 取出图片的原始名称
         const {image_url, image_small_url} = this.props.location.state.sowing;
         // 3. 创建formData
         let formData = new FormData();
         formData.append('id', id);
         formData.append('image_title', image_title);
         formData.append('image_link', image_link);
         formData.append('s_time', s_time);
         formData.append('e_time', e_time);
         formData.append('image_url', this.refs.image_url.files[0] || image_url);
         formData.append('image_small_url', this.refs.image_small_url.files[0] || image_small_url);
         // 4. 发送请求
        editSowingData(formData).then((res)=>{
            console.log(res);
            if(res.status_code === 200){
                this.props.history.push('/sowing/list');
            }
        }).catch((error)=>{
            console.log(error);
            alert('修改数据失败！');
        });
    }

}

export default SowingEdit;