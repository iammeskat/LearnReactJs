import React,{Component} from 'react';

class Welcome extends Component{

    DoThis(x){
        alert(x);
    }
    render (){
        return <div>
            <button onClick={this.DoThis.bind(this, "Butoon is clicked from class")}>Click Me from class</button>
            <h1>Hello I am form {this.props.name}</h1>
        </div>
    }
}
export default Welcome;