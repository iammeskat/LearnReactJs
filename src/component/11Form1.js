import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super();
        this.state = {}
    }



    render() {
        return (
            <div>
                <select value="Chittagong">
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Sylhet</option>
                </select>
            </div>
        );
    }
}

export default Form;