import React, { Component } from 'react';
import logo from './squirrel_face_by_runicrhyme-d6o210j.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <span>Hello React</span>
        </p>
      </div>
    );
  }
}

export default App;
