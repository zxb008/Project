import React, { Component } from 'react';
class SowingAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="body advert">
          <ol className="breadcrumb">
            <li><a href="/sowinglist">轮播图管理</a></li>
            <li className="active">添加轮播图</li>
          </ol>
          <div className="advert-add">
            <div className="form-horizontal">
              <div className="form-group">
                <label htmlFor="" className="col-md-3 control-label">图片名称</label>
                <div className="col-md-5">
                  <input ref="image_title" type="text" className="form-control input-sm" placeholder="填写图片名称" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-3 control-label">大图片</label>
                <div className="col-md-5">
                  <input ref="image_url" type="file" className="form-control input-sm" placeholder="选择大图片" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-3 control-label">小图片</label>
                <div className="col-md-5">
                  <input ref="image_small_url" type="file" className="form-control input-sm" placeholder="选择小图片" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-3 control-label">跳转页面链接</label>
                <div className="col-md-5">
                  <input ref="image_link" type="text" className="form-control input-sm" placeholder="填写跳转链接" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-3 control-label">计划上架时间</label>
                <div className="col-md-5">
                  <input ref="s_time" type="text" className="form-control input-sm" placeholder="计划上架时间" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-md-3 control-label">计划下架时间</label>
                <div className="col-md-5">
                  <input ref="e_time" type="text" className="form-control input-sm" placeholder="计划下架时间" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-8">
                  <button  className="btn btn-danger btn-sm pull-right">添加轮播图</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SowingAdd;