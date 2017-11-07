import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './Controls';
import Greeting from './Greeting';

class App extends Component {

  constructor() {
    super();
    this.state = {
      salutation: 'Today is',
      statement: 'Tuesday',
      color: '#C70039'
    };
  }

  handleSalutationChange(value) {
    this.setState({ salutation: value });
  }

  handleStatementChange(value) {
    this.setState({ statement: value });
  }

  handleColorChange(value) {
    this.setState({ color: value });
  }

  render() {
    const { salutation, statement, color } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Controls salutation={salutation} statement={statement}
          onSalutationChange={salutation => this.handleSalutationChange(salutation)}
          onStatementChange={statement => this.handleStatementChange(statement)}
          onColorChange={color => this.handleColorChange(color)}
        />
        <Greeting salutation={salutation}
          color={color} statement={statement}
        />
      </div>
    );
  }
}

export default App;
