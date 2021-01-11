import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


// function Arrrow(){
// return(
//     <button>My button</button>
// );
// }
const AlertMe=(x)=>{
    alert(x)
}
const Arrow=()=>{
    return(
        <button onClick={AlertMe.bind(this, "I am from Arrow function")} className="btn btn-success mt-5">My Button</button>
    )
}

export default Arrow;