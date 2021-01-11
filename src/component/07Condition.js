import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Condition extends Component{
    constructor(){
        super();
        this.state = {
            login: true
        }
    }
    action(status){
        this.setState({login: status});
    }
    render(){
        // if(this.state.login == true){
        //     return <button className="btn btn-danger mt-4" onClick={this.action.bind(this, false)}>Logout</button>
        // }
        // else {
        //     return <button className="btn btn-primary mt-4" onClick={this.action.bind(this, true)}>Login</button>
        // }
        return(
            this.state.login?(
            <button className="btn btn-danger mt-4" onClick={this.action.bind(this, false)}>Logout</button>
            ):(
            <button className="btn btn-primary mt-4" onClick={this.action.bind(this, true)}>Login</button>)
        )
    }
}

export default Condition;