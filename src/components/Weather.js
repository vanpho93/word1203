import React, { Component } from 'react';
import axios from 'axios';

export class Weather extends Component {
    componentDidMount() {
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        axios.get(url + 'SaiGon')
        .then(x => console.log(x.data.main.temp));
    }
    render() {
        return (
            <div>
                Temp: 1
            </div>
        );
    }
}
