import React, { Component } from 'react';

export class Weather extends Component {
    componentDidMount() {
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
    }
    render() {
        return (
            <div>
                Temp: 1
            </div>
        );
    }
}
