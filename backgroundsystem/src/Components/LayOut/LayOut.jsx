import React, {Component} from 'react';
import Header from "../Header/Header";
import Side from "../Side/Side";

class LayOut extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main">
                    <Side/>
                    {/* this.props.children它表示组件的所有子节点
                    this.props.children的值有三种可能：
                    1. 当前组件没有子节点，为 undefined
                    2. 若只有一个子节点，类型为 Object
                    3. 若有多个子节点，类型为 Array */}
                   {this.props.children}
                </div>
            </div>
        );
    }
}

export default LayOut;