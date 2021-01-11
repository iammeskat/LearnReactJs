import React, { Component } from 'react'; 
import axios from 'axios';

class Post2 extends Component {
    constructor(){
        super();
        this.state={
            postData:'',
            postResult:'',
        }
    }
    onClickHandler=()=>{
        axios.post("https://robiivr.000webhostapp.com/post.php", this.state.postData)
        .then((response)=>{
            this.setState({postResult:response.data});
            alert(this.state.postResult);
        })
        .catch(error=>{
            alert("Something Went Wrong!\n"+this.state.postResult);
        })
    }
    onChangeHandler=(event)=>{ 
        var fieldData = event.target.value;
        this.setState({postData:fieldData});
        
    }
    render() {
        return (
            <div>
                <input onChange={this.onChangeHandler} type="text" />
                <button onClick={this.onClickHandler}>Send</button>
            </div>
        );
    }
}

export default Post2;