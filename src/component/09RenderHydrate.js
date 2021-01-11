import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class RenderHydrate extends Component {

    action(){
        var container = document.getElementById("name");
        var element = <h1> My name is Meskatul Islam I am from ReactDOM </h1>;
        var callback = function(){alert("Hi I am Callback")}
        ReactDOM.render(element,container, callback);
        // ReactDOM.hydrate(element,container, callback);
        
    }

    render() {
        return (
            <div>
                <button onClick={this.action}>Change</button>
                <h1 id="name">My name is Meskat</h1>
            </div>
        );
    }
}

export default RenderHydrate;