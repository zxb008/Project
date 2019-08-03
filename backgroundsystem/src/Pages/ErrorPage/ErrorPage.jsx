import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ErrorPage extends Component {
    render() {
        return (
            <div className="container-fluid"
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     flexDirection: "column",
                     paddingTop: 100
                 }}>
               
                <Link to="/">
                    <h3 className="text-primary">
                     点我返回首页！
                    </h3>
                </Link>
            </div>
        );
    }
}

export default ErrorPage;