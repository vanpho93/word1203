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
    this.state = { words: WORDS };
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
        <div className="form-group" style={{ width: '200px' }}>
          <input placeholder="English" className="form-control" />
          <br />
          <input placeholder="Vietnamese" className="form-control" />
          <br />
          <button className="btn btn-success form-control">Add word</button>
        </div>
        { this.state.words.map(word => this.genList(word)) }
      </div>
    );
  }
}

export default App;
