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
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default LayOut;