import React from 'react';
import { connect } from 'react-redux';

const WordComponent = ({ wordInfo, dispatch, onToggleMemorized }) => (
    <div className="word" key={wordInfo._id}>
        <div className="word-container">
        <h3 className="text-success">{wordInfo.en}</h3>
        <h3 className="text-danger">
            {wordInfo.isMemorized ? '----' : wordInfo.vn}
        </h3>
        </div>
        <div className="btn-container">
        <button className="btn btn-success" onClick={() => onToggleMemorized(wordInfo._id)}>
            { wordInfo.isMemorized ? 'Forgot' : 'Memorized' }
        </button>
        <button
            className="btn btn-warning" 
            onClick={() => dispatch({ type: 'REMOVE_WORD', _id: wordInfo._id })}
        >
            Remove
        </button>
        </div>
    </div>
);

export const Word = connect()(WordComponent);
