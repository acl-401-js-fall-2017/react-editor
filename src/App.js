import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './Controls';
import Greeting from './Greeting';
import Season from './Season';
import Sun from './Sun';

class App extends Component {

  constructor() {
    super();
    this.state = {
      salutation: 'Today is',
      statement: 'Tuesday',
      color: '#c70039',
      season: 'Winter',
      sun: true
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

  handleSeasonChange(event) {
    this.setState({ season: event.target.value });
  }

  handleSeasonSubmit(event) {
    alert('We are in the ' + this.state.season + ' season!');
    event.preventDefault();
  }

  handleSunChange(event) {
    console.log(event.target.value);
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ sun: value });
  }

  render() {
    const { salutation, statement, color, season, sun } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What Is Today?</h1>
        </header>
        <Controls salutation={salutation} statement={statement} season={season}
          onSalutationChange={salutation => this.handleSalutationChange(salutation)}
          onStatementChange={statement => this.handleStatementChange(statement)}
          onColorChange={color => this.handleColorChange(color)}
          onSeasonChange={season => this.handleSeasonChange(season)}
          onSunChange={sun => this.handleSunChange(sun)}
        />
        <Greeting salutation={salutation}
          color={color} statement={statement}
        />
        <Season season={season}
          onSeasonChange={season => this.handleSeasonChange(season)}
          onSeasonSubmit={season => this.handleSeasonSubmit(season)}
        />
        <Sun sun={sun}
          onSunChange={sun => this.handleSunChange(sun)}
        />
        {sun === true && (
          <p>Don't forget to grab your sunglasses!</p>
        )}
      </div>
    );
  }
}

export default App;
