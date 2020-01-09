import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayBoard from './PlayBoard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Tic Tac Toe</p>
      </header>
      <PlayBoard></PlayBoard>
    </div>
  );
}

export default App;
