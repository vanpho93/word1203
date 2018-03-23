import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

class WordFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { txtEn, txtVn } = this.state;
        this.props.addWord(txtEn, txtVn);
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        const { shouldShowForm, toggleShouldShowForm } = this.props;
        if (!shouldShowForm) return (
            <button
                className="btn btn-success"
                onClick={toggleShouldShowForm}
            >
                Add Word
            </button>
        );
        return (
            <div className="form-group" style={{ width: '200px' }}>
                <input
                    placeholder="English"
                    className="form-control"
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                    value={this.state.txtEn}
                />
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                    value={this.state.txtVn}
                />
                <br />
                <div className="btn-container">
                <button className="btn btn-success" onClick={this.addWord}>
                    Add word
                </button>
                <button
                    className="btn btn-danger"
                    onClick={toggleShouldShowForm}
                >
                    Cancel
                </button>
                </div>
            </div>
        );
    }
}

const mapState = state => ({ shouldShowForm: state.shouldShowForm });

export const WordForm = connect(mapState, actionCreators)(WordFormComponent);
