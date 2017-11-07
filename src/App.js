import React, { Component } from 'react';
import logo from './squirrel_face_by_runicrhyme-d6o210j.png';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      salutation: 'Hello ',
      name: '401 JS',
      color: '#fffff'
    };
  }

  handleSalutationChange(value) {
    this.setState({ salutation: value });
  }

  handleNameChange(value) {
    this.setState({ name: value });
  }

  handleColorChange(value) {
    this.setState({ color: value });
  }


  render() {
    const { salutation, name, color } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Playing around with React</h1>
        </header>
        <p className="App-intro">
          <span>Hello React!</span>
        </p>
        <Controls salutation={salutation} name={name}
          onSalutationChange={salutation => this.handleSalutationChange(salutation)}
          onNameChange={name => this.handleNameChange(name)}
          onColorChange={color => this.handleColorChange(color)}
        />
        <p>
          <Greeting salutation={salutation}
            color ={color} name={name}
          />
        </p>
      </div>
    );
  }
}

class Controls extends Component {
  render() {
    const { salutation, name, color, onSalutationChange, onNameChange, onColorChange } = this.props;
    return (
      <div>
        <label>
        salutation:
          <input name="salutation" value={salutation}
            onChange={({ target }) => onSalutationChange(target.value)}/>
        </label>
        <label>
        name:
          <input name="name" value={name}
            onChange={({ target }) => onNameChange(target.value)} />
        </label>
        <label>
          color:
          <input name="color" type="color" value={color}
            onChange={({ target }) => onColorChange(target.value)} />
        </label>
      </div>

    );
  }
}

class Greeting extends Component {
  render() {
    const { salutation, name, color} = this.props;
    return(
      <div style={{ color }}>
        <span>{salutation}</span>
        <span>{name}</span>
      </div>
    );
  }
}

export default App;
