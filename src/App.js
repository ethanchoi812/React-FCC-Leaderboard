import React, { Component } from 'react';
import Board from './board.js';
import logo from './logo.svg';
import sasslogo from './sass-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>freeCodeCamp Camper Leaderboard</h2>
        </div>
        <Board />
        <footer>
        Build with  <img src={logo} className="App-logo" alt="logo" /> &amp; <img src={sasslogo} className="sass-logo" alt="sass-logo" />
        <p><a href="https://github.com/ethanchoi812/React-FCC-Leaderboard">Go to Github repo</a></p></footer>
      </div>
    );
  }
}

export default App;
