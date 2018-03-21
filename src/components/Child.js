import React from 'react';

export const Child = ({ onIncrease, onDescrease, onReset }) => (
    <div>
        <button className="btn btn-success" onClick={onIncrease}>Increase</button>
        <br />
        <br />
        <button className="btn btn-warning" onClick={onDescrease}>Descrease</button>
        <br />
        <br />
        <button className="btn btn-danger" onClick={onReset}>Reset</button>
    </div>
);
