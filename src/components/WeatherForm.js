import React, { Component } from 'react';

export const WeatherForm = () => (
    <div className="form-group">
        <div className="form-group">
            <label>City Name:</label>
            <input className="form-control"/>
        </div>
        <button className="btn btn-success form-control">Get Weather</button>
    </div>
);
