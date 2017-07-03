import React, { Component } from 'react';
import Board from './board.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>freeCodeCamp Camper Leaderboard</h2>
        </div>
        <Board />
        <footer><a href="">Github repo</a></footer>
      </div>
    );
  }
}

export default App;
