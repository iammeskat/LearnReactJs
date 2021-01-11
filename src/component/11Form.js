import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super();
        this.state = {}
    }

    onChangeHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue});

        if(inputName == 'name'){
            var pattern=  /^([a-zA-Z ]){2,30}$/; 
            if(!pattern.test(inputValue)){
                this.setState({[inputName]:"Name is not a valid"});
            }    
        }
        if(inputName == 'username'){
            var pattern=  /^([a-zA-Z ]){2,30}$/;
            if(!pattern.test(inputValue)){
                this.setState({[inputName]:"Email is not a valid"});
            }    
        }
        if(inputName == 'email'){
            var namePattern=  /\S+@\S+\.\S+/; 
            if(!namePattern.test(inputValue)){
                this.setState({[inputName]:"Name is not a valid"});
            }    
        }
        if(inputName == 'mobile'){
            if(!Number(inputValue)){
                this.setState({[inputName]:"Mobile is not a valid"});
            }    
        }
    }

    onSubmitHandler=()=>{
        alert(this.state.name);
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Username: {this.state.username}</p>
                <p>E-mail: {this.state.email}</p>
                <p>Mobile: {this.state.mobile}</p>
                <form onSubmit={this.onSubmitHandler}>
                    <h4>My Form</h4>
                    <input name="name" onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input><br></br>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your username"></input><br></br>
                    <input name="email" onChange={this.onChangeHandler} type="email" placeholder="Your Email"></input><br></br>
                    <input name="mobile" onChange={this.onChangeHandler} type="text" placeholder="Your Mobile"></input><br></br>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default Form;