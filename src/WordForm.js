import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { txtEn, txtVn } = this.state;
        const word = {
            _id: Math.random() + '',
            en: txtEn,
            vn: txtVn,
            isMemorized: false
        };
        this.props.dispatch({ type: 'ADD_WORD', word });
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        const { shouldShowForm, dispatch } = this.props;
        if (!shouldShowForm) return (
            <button
                className="btn btn-success"
                onClick={() => dispatch({ type: 'TOGGLE_SHOULD_SHOW_FORM' })}
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
                    onClick={() => dispatch({ type: 'TOGGLE_SHOULD_SHOW_FORM' })}
                >
                    Cancel
                </button>
                </div>
            </div>
        );
    }
}

const mapState = state => ({ shouldShowForm: state.shouldShowForm });

export const WordForm = connect(mapState)(WordFormComponent);
