import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      salutation: 'Hello', 
      name: 'Defaut name',
      color: '#fffff'
    }
  }

  handleSalutationChange(value){
    this.setState({ salutaion: value});
  }

  handleNameChange(value){
    this.setState({ name: value});
  }

  handleColorChange(value){
    this.setState({ color: value})
  }


  render() {

    const { salutation, name, color } = this.state;
    return (
      <div className="App">
        <Controls salutation={salutation} name={name}
          onSalutationChange={salutation => this.handleSalutationChange(salutation)}
          onNameChange={name => this.handleNameChange(name)}
          onColorChange={color => this.handleColorChange(color)}
        />
      </div>
    );
  }
}

class Greeting extends Component {
  render(){
    const { salutation, name, color, onSalutationChange, onNameChange, onColorChange} = this.props;
  }
}

export default App;
