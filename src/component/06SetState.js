import React, {Component} from 'react';

class SetState extends Component{
    
    constructor(){
        super();
        this.state = {
            name: "Meskat",
        }
    }
    changeName(name){
        
        this.setState({name: name,})
    }

    render(){
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.changeName.bind(this, "Meskatul Islam")}>Change name</button>
        </div>
    }
}

export default SetState