import React, { Component } from 'react';

class List extends Component {

    list=(item)=>{
        return <li>{item}</li>;
    }
    render() {
        const country = ['Bangladesh', 'China', 'Japan',  'Canada'];
        // const list = country.map((item)=>{
        //     return <li>{item}</li>
        // });
        const list = country.map(this.list);
        return (
            <div>
                <ol>
                    {list}
                </ol>
            </div>
        );
    }
}

export default List;