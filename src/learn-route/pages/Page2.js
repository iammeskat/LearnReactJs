import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Page2 extends Component {
    render() {
        if(sessionStorage.getItem('userName') != null){
            return (
                <div>
                    <h1>Page 2</h1>
                </div>
            );
        }
        else{
            return <Redirect to="/login" />
        }
    }
}

export default Page2;