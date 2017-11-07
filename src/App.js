import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './Controls';
import Greeting from './Greeting';
import Season from './Season';

class App extends Component {

  constructor() {
    super();
    this.state = {
      salutation: 'Today is',
      statement: 'Tuesday',
      color: '#C70039',
      season: 'Autumn'
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

  handleSeasonChange(value) {
    this.setState({ season: value });
  }

  handleSeasonSubmit(event) {
    alert('We are in the ' + this.state.value + ' season!');
    event.preventDefault();
  }

  render() {
    const { salutation, statement, color, season } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Controls salutation={salutation} statement={statement} season={season}
          onSalutationChange={salutation => this.handleSalutationChange(salutation)}
          onStatementChange={statement => this.handleStatementChange(statement)}
          onColorChange={color => this.handleColorChange(color)}
          onSeasonChange={season => this.handleSeasonChange(season)}
        />
        <Greeting salutation={salutation}
          color={color} statement={statement}
        />
        <Season season={season}
        />
      </div>
    );
  }
}

export default App;
