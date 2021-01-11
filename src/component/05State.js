import React,{Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class StateTest extends Component{

    constructor(){
        super();
        var obj = {
            name: "Meskatul Islam",
            age: ["23", "25", "27"],
            height: "5 feet 6 inch",
            weight: {
                class5: "35KG",
                class6: "37KG",
                class7: "40KG"
            },
        }
        this.state = obj;
    }

    render(){
        return <div className="card m-4">
            <div className="card-body">
                <h1>Name: {this.state.name}</h1>
                <h1>Age: {this.state.age[0]}</h1>
                <h1>Height: {this.state.height}</h1>
                <h1>weight: {this.state.weight.class7}</h1>
            </div>     
            
        </div>
    }
}

export default StateTest;