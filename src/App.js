import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      italic: false,
      bold: false,
      color: '#36ade2',
      fontSize: '1rem',
      message: 'Lets React'
    };
  }

  handleOnItalic(value) {
    this.setState({ italic: value });
  }

  handleOnBold(value) {
    this.setState({ bold: value });
  }

  handleOnColor(value) {
    this.setState({ color: value });
  }

  handleOnFontSize(value) {
    this.setState({ fontSize: value + 'rem' });
  }

  handleOnMessageChange(value) {
    this.setState({ message: value });
  }
  
  render() {
    const { color, italic, bold, fontSize, message } = this.state;
    let fontStyle = null;
    if(italic === true) {
      fontStyle = 'italic';
    }
    let fontWeight = null;
    if(bold === true) {
      fontWeight = 'bold';
    }
    return (
      <div className="App">
        <div>
          <label>
            color:
            <input
              name="color"
              type="color"
              onChange={({ target }) => this.handleOnColor(target.value)}
            />
          </label>
          <label>
            italic:
            <input
              name="italic"
              type="checkbox"
              checked={italic}
              onChange={({ target }) => this.handleOnItalic(target.checked)}
            />
          </label>
          <label>
            bold:
            <input
              name="bold"
              type="checkbox"
              checked={bold}
              onChange={({ target }) => this.handleOnBold(target.checked)}
            />
          </label>
          <label>
            font size:
            <select
              className="button"
              value={fontSize}
              onChange={({ target }) => this.handleOnFontSize(target.value)}>
              <option value="1">sm</option>
              <option value="1.5">md</option>
              <option value="2">lg</option>
            </select>
          </label>
        </div>
        <div>
          <input
            id="editor"
            name="message"
            value={message}
            style={{
              textAlign:'center',
              fontSize,
              fontStyle,
              fontWeight,
              color
            }} 
            onChange={({ target }) => this.handleOnMessageChange(target.value)}>
          </input>
        </div>
        <ShowText 
          message={message}
          fontSize={fontSize}
          fontStyle={fontStyle}
          fontWeight={fontWeight}
          color={color}/>
      </div>
    );
  }
}

class ShowText extends Component {
  render() {
    const { fontSize, fontStyle, fontWeight, color } = this.props;
    return(
      <div>
        <span style={{
          fontSize,
          fontStyle,
          fontWeight,
          background: color
        }}>
          {this.props.message}
        </span>
      </div>
    );
  }
}


export default App;
