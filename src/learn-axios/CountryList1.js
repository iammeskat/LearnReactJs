import React, { Component } from 'react';
import axios from 'axios';

class CountryList1 extends Component {

    constructor(){
        super();
        this.state = {
            data:[],
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({data:response.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render() {
        const countries = this.state.data;
        const countryList = countries.map((list)=>{
            return <li>{list.name}</li>
        })
        return (
            <div>
                <ul>
                    {countryList}
                </ul>
            </div>
        );
    }
}

export default CountryList1;