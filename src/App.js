import React, { Component } from 'react';
// import { Parent } from './Parent';
import { Word } from './components/Word';
import { WordForm } from './components/WordForm';
import { WordFilter } from './components/WordFilter';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actionCreators';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getAllWords();
  }

  genListWords() {
    const { filterStatus, words } = this.props;
    const filteredWords = words.filter(w => {
      if (filterStatus === 'SHOW_ALL') return true;
      if (filterStatus === 'SHOW_FORGOT') return !w.isMemorized;
      return w.isMemorized;
    })
    return filteredWords.map(word => (
      <Word
        key={word._id}
        wordInfo={word}
      />
    ));
  }

  render() {
    return (
      <div className="App container">
        <WordForm />
        <WordFilter />
        { this.genListWords() }
      </div>
    );
  }
}

const mapStates = state => ({
  words: state.words,
  filterStatus: state.filterStatus
});

export default connect(mapStates, actionCreators)(App);
