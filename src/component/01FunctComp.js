import React from 'react';

function Hello(props){

    function DoThis(x){
        alert(x);
    }

    return(
        <div>
            <button onClick={DoThis.bind(this, "Button is Clicked from function")}>Click Me</button>
            <h1>Name: {props.name} and Age: {props.age}</h1>
        </div>
        
    );
}
export default Hello;