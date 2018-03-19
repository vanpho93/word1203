import React, { Component } from 'react';

export class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <br />
                <br />
                <button className="btn btn-success">Increase</button>
                <br />
                <br />
                <button className="btn btn-warning">Descrease</button>
                <br />
                <br />
                <button className="btn btn-danger">Reset</button>
            </div>
        );
    }
}
