import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Page3 extends Component {
    constructor({match}){
        super();
        this.state={
            username: match.params.username,
        }
    }
    render() {
        if(sessionStorage.getItem('userName') != null){
            return (
                <div>
                    <h1>Page 1</h1>
                </div>
            );
        }
        else{
            return <Redirect to="/login" />
        }
    }
}

export default Page3;