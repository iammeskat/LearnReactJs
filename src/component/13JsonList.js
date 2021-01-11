import React, { Component } from 'react';

class JsonList extends Component {
    render() {
        const jsonList = [
            {city: "Dhaka", zip: 6000},{city: "Chittagong", zip: 4370},
            {city: "Sylhet", zip: 4562},{city: "Cumilla", zip: 1254},
        ];
        const itemsCity = jsonList.map((item)=>{
            return <option>{item.city}</option>
        });
        const itemsZip = jsonList.map((item)=>{
            return <option>{item.zip}</option>
        });
        return (
            <div>
                <select>{itemsCity}</select>
                <select>{itemsZip}</select>
            </div>
        );
    }
}

export default JsonList;