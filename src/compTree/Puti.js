import React, { Component } from 'react';
import { PutiConsumer } from './MyContext';

class Puti extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.name}</h1>
                <h1>
                    <PutiConsumer>
                        {
                            msg=>{
                                return msg;
                            }
                        }
                    </PutiConsumer>
                </h1>
            </div>
        );
    }
}

export default Puti;