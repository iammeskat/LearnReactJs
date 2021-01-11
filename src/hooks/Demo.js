import React from 'react';
import {useState} from 'react';

const Demo = () => {
    const [name, setName] = useState({
        country: 'Bangladesh',
        city: 'Chittagong',
    });
    // setName({city: 'Dhaka'});
    const Change=()=>{
        setName({city: "Dhaka", country:"BD"})
    }
    return (
        <div>
            <h1>{name.country}</h1>
            <h1>{name.city}</h1>
            <button onClick={Change}>Changne</button>
        </div>
    );
};

export default Demo;