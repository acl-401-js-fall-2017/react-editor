import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      firstName: 'John',
      lastName: 'Smith',
      bgColor: '#ffffff',
      color: '#000000',
      message: 'Come one, come all'
    };
  }

  handleFirstNameChange(value) {
    this.setState({ firstName: value });
  }

  handleLastNameChange(value) {
    this.setState({ lastName: value });
  }

  handleMessage(value) {
    this.setState({ message: value });
  }

  handleBGColorChange(value) {
    this.setState({ bgColor: value });
  }

  handleColorChange(value) {
    this.setState({ color: value });
  }


  render() {
    const { firstName, lastName, message, bgColor, color } = this.state;
    
    return (
      <div className="App">
        <Controls firstName={firstName} lastName={lastName} message={message} bgColor={bgColor} color={color} 
          onFirstNameChange={firstName => this.handleFirstNameChange(firstName)}
          onLastNameChange={lastName => this.handleLastNameChange(lastName)}
          onMessageChange={message => this.handleMessageChange(message)}
          onBGColorChange={bgColor => this.handleBGColorChange(bgColor)}
          onColorChange={color => this.handleColorChange(color)}
        />
      </div>
    );
  }
}

class Controls extends Component {
  render () {
    const { firstName, lastName, message, bgColor, color, onFirstNameChange, onLastNameChange, onMessageChange, onBGColorChange, onColorChange } = this.props;
    return (
      <div>
        <div style={{ backgroundColor: bgColor }}>
          <h1 style={{ color }}>"{message}" says {firstName} {lastName}</h1>
        </div>
        <label>
          firstName:
          <input name="firstName" value={firstName}
            onChange={({ target }) => onFirstNameChange(target.value)}/>
        </label>
        <label>
          lastName:
          <input name="lastName" value={lastName}
            onChange={({ target }) => onLastNameChange(target.value)}/>
        </label>
        <label>
          message:
          <input name="message" value={message}
            onChange={({ target }) => onMessageChange(target.value)}/>
        </label>
        <label>
          bgColor:
          <input name="bgColor" type="color" value={bgColor}
            onChange={({ target }) => onBGColorChange(target.value)}/>
        </label>
        <label>
          color:
          <input name="color" type="color" value={color}
            onChange={({ target }) => onColorChange(target.value)}/>
        </label>
      </div>
    );
  }
}

export default App;
