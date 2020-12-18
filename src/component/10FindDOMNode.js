import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class FindDOMNode extends Component {

    chngIMG(){
        var imgID = document.getElementById("img");
        ReactDOM.findDOMNode(imgID).src="logo512.png"; //inner html, style, css etc.

    }
    render() {
        return (
            <div>
                <button onClick={this.chngIMG}>Change Image</button><br></br>
                <img id="img" src="logo192.png"></img>
            </div>
        );
    }
}

export default FindDOMNode;