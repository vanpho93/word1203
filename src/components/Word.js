import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

const WordComponent = ({ wordInfo, removeWord, toggleIsMemorized }) => (
    <div className="word" key={wordInfo._id}>
        <div className="word-container">
        <h3 className="text-success">{wordInfo.en}</h3>
        <h3 className="text-danger">
            {wordInfo.isMemorized ? '----' : wordInfo.vn}
        </h3>
        </div>
        <div className="btn-container">
        <button
            className="btn btn-success"
            onClick={() => toggleIsMemorized(wordInfo._id)}
        >
            { wordInfo.isMemorized ? 'Forgot' : 'Memorized' }
        </button>
        <button
            className="btn btn-warning" 
            onClick={() => removeWord(wordInfo._id)}
        >
            Remove
        </button>
        </div>
    </div>
);

export const Word = connect(undefined, actionCreators)(WordComponent);
