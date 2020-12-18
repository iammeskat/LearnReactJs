import React, { Component } from 'react';
import styles from '../MyCSS.module.css';
//  

class CSSPractice extends Component {
    render() {
        const textStyle = {
            backgroundColor:"navy",
            color:"white",
            margin:"20px"
        }
        return (
            <div>
                <h1 style={{backgroundColor:"navy", color:"white"}}>Meskatul Islam</h1>
                <h1 style={textStyle}>Meskatul Islam</h1>
                <h1 className={styles.textStyle}>Meskatul Islam</h1>
                {/* <h1 className="textStyle">Meskatul Islam</h1> */}
            </div>
        );
    }
}

export default CSSPractice;