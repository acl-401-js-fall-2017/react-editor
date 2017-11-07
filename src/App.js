import React, { Component } from 'react';
import logo from './squirrel_face_by_runicrhyme-d6o210j.png';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      salutation: 'Hello ',
      name: '401 JS'
    };
  }

  handleSalutationChange(value) {
    this.setState({ salutation: value });
  }

  handleNameChange(value) {
    this.setState({ name: value });
  }


  render() {
    const { salutation, name } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Playing around with React</h1>
        </header>
        <p className="App-intro">
          <span>Hello React!<input/></span>
        </p>
        <Controls salutation={salutation} name={name}
          onSalutationChange={salutation => this.handleSalutationChange(salutation)}
          onNameChange={name => this.handleNameChange(name)}
        />
        <Greeting salutation={salutation}
          name={name}
        />
      </div>
    );
  }
}

class Controls extends Component {
  render() {
    const { salutation, name, onSalutationChange, onNameChange  } = this.props;
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
      </div>

    );
  }
}

class Greeting extends Component {
  render() {
    const { salutation, name} = this.props;
    return(
      <div>
        <span>{salutation}</span>
        <span>{name}</span>
      </div>
    );
  }
}

export default App;
