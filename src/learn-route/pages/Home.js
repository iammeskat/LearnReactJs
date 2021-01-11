import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Home extends Component {
    logout=()=>{
        sessionStorage.clear();
    }
    render() {
        if(sessionStorage.getItem('userName') != null){
            return (
                <div>
                    <h1>Home Page</h1>
                    <button onClick={this.logout}>Logout</button>
                </div>
            );
        }
        else{
            return <Redirect to="/login" />
        }
    }
}

export default Home;