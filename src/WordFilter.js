import React from 'react';

export const WordFilter = ({ filterStatus }) => (
    <div>
        <br />
        <select
            className="form-control"
            style={{ width: '200px' }}
            value={filterStatus}
        >
            <option value="SHOW_ALL">SHOW ALL</option>
            <option value="SHOW_FORGOT">SHOW FORGOT</option>
            <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
        </select>
    </div>
);
