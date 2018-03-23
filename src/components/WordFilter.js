import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

const WordFilterComponent = ({ filterStatus, setFilterStatus }) => (
    <div>
        <br />
        <select
            className="form-control"
            style={{ width: '200px' }}
            value={filterStatus}
            onChange={evt => setFilterStatus(evt.target.value)}
        >
            <option value="SHOW_ALL">SHOW ALL</option>
            <option value="SHOW_FORGOT">SHOW FORGOT</option>
            <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
        </select>
    </div>
);

const mapState = state => ({ filterStatus: state.filterStatus });
export const WordFilter = connect(mapState, actionCreators)(WordFilterComponent);
