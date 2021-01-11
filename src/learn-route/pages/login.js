import React, { Component } from 'react';

class login extends Component {
    login=()=>{
        sessionStorage.setItem('userName', 'meskat');
    }
    render() {
        return (
            <div>
                <button onClick={this.login}>LOGIN</button>
            </div>
        );
    }
}

export default login;