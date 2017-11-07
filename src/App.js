import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxControls from './BoxControls'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      borderStyle: 'dotted',
      color: '#ff0000',
      width: '500',
      height: '300',
      text: 'Hey there!',
      concat:'snakeCase'
    };

    this.onColorChange = this.onColorChange.bind(this);

    this.onWidthChange = this.onWidthChange.bind(this);

    this.onHeightChange = this.onHeightChange.bind(this);

    this.onTextChange = this.onTextChange.bind(this);

    this.onConcatChange = this.onConcatChange.bind(this);
  }

  onColorChange(e) {
    this.setState({ color: e.target.value });
  }

  changeBorder(value){
    this.setState({ borderStyle: value });
  }

  onWidthChange(e) {
    const goodInput = /^[0-9]*$/;
    if (goodInput.test(e.target.value)) {
      this.setState({ width: e.target.value });
    }
  }

  onHeightChange(e) {
    const goodInput = /^[0-9]*$/;
    if (goodInput.test(e.target.value)) {
      this.setState({ height: e.target.value });
    }
  }

  onTextChange(e) {
    this.setState({ text: e.target.value });
  }

  onConcatChange(e) {
    this.setState({ concat: e.target.value });
  }


  render() {
    function displayText(text, concat){
      let wordArray= text.split(' ');
      if(concat === 'snakeCase')  return toSnake(wordArray);
      if(concat === 'kebabCase') return toKebab(wordArray);
      if(concat === 'camelCase') return toCamel(wordArray);

      function toSnake(text){
        return text.join('_');
      }

      function toKebab(text){
        return text.join('-');
      }

      function toCamel(text){
        const camelized = [];
        text.forEach(value =>{
          let letters = value.split('');
          letters[0]=letters[0].toUpperCase();
          camelized.push(letters.join(''));
        });
        return camelized.join('');
        
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Editor Lab</h1>
        </header>

        <div className="wrapper">
          <BoxControls
            color={this.state.color}
            onColorChange={this.onColorChange}

            borderStyle={this.state.borderStyle}
            onBorderChange={(value) => this.changeBorder(value)}

            height={this.state.height}
            onHeightChange={this.onHeightChange}

            width={this.state.width}
            onWidthChange={this.onWidthChange}
          />
          
          <div className="box" style={{
            width: `${this.state.width}px`,
            height: `${this.state.height}px`,
            border: `4px ${this.state.borderStyle} ${this.state.color}`
          }}>
            <span>{displayText(this.state.text, this.state.concat)}</span>
          </div>

          <div className="controls">

            <input
              name="text"
              value={this.state.text}
              onChange={this.onTextChange}
            />
            <select
              value={this.state.concat}
              onChange={this.onConcatChange}
            >
              <option value="snakeCase">SnakeCase</option>
              <option value="camelCase">CamelCase</option>
              <option value="kebabCase">KebabCase</option>
            </select>
          </div>

        </div>
      </div>
    );
  }
}

export default App;