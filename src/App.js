import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const WORDS = [
  { _id: 'abc1', en: 'One', vn: 'Một', isMemorized: true },
  { _id: 'abc2', en: 'Two', vn: 'Hai', isMemorized: false },
  { _id: 'abc3', en: 'Three', vn: 'Ba', isMemorized: false },
  { _id: 'abc4', en: 'Four', vn: 'Bốn', isMemorized: true },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { words: WORDS, txtEn: '', txtVn: '', shouldShowForm: false };
  }

  addWord() {
    const { txtEn, txtVn, words } = this.state;
    const newWord = { _id: Math.random(), en: txtEn, vn: txtVn, isMemorized: false };
    const newArray = [newWord].concat(words);
    this.setState({ words: newArray, txtEn: '', txtVn: '' });
  }

  removeWord(_id) {
    const newWords = this.state.words.filter(w => w._id !== _id);
    this.setState({ words: newWords });
  }

  toggleMemorized(id) {
    const newWords = this.state.words.map(word => {
      if (word._id !== id) return word;
      const { en, vn, _id, isMemorized } = word;
      return { en, vn, _id, isMemorized: !isMemorized };
    });
    this.setState({ words: newWords });
  }

  genList(word) {
    return (
        <div className="word" key={word._id}>
          <div className="word-container">
            <h3 className="text-success">{word.en}</h3>
            <h3 className="text-danger">
              {word.isMemorized ? '----' : word.vn}
            </h3>
          </div>
          <div className="btn-container">
            <button className="btn btn-success" onClick={() => this.toggleMemorized(word._id)}>
              { word.isMemorized ? 'Forgot' : 'Memorized' }
            </button>
            <button className="btn btn-warning" onClick={() => this.removeWord(word._id)}>
              Remove
            </button>
          </div>
        </div>
    )
  }

  render() {
    return (
      <div className="App container">
        <button className="btn btn-success">Add Word</button>
        <div className="form-group" style={{ width: '200px' }}>
          <input
            placeholder="English"
            className="form-control"
            onChange={evt => this.setState({ txtEn: evt.target.value })}
          />
          <br />
          <input
            placeholder="Vietnamese"
            className="form-control"
            onChange={evt => this.setState({ txtVn: evt.target.value })}  
          />
          <br />
          <div class="btn-container">
            <button className="btn btn-success" onClick={() => this.addWord()}>
              Add word
            </button>
            <button className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>
        { this.state.words.map(word => this.genList(word)) }
      </div>
    );
  }
}

export default App;
