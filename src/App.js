import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      italic: false,
      bold: false,
      color: '#000000'
    };
  }

  handleOnItalic(value) {
    console.log(value);
    this.setState({ italic: value });
  }

  handleOnBold(value) {
    console.log(value);
    this.setState({ bold: value });
  }

  handleOnColor(value) {
    this.setState({ color: value });
  }

  handleOnFontSize(value) {
    this.setState({ fontSize: value + 'rem' });
  }
  

  render() {
    const { color, italic, bold, fontSize, message } = this.state;
    let fontStyle = null;
    if(italic === true) {
      fontStyle = "italic";
    }
    let fontWeight = null;
    if(bold === true) {
      fontWeight = "bold";
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
        <textarea
          id="editor"
          name="message"
          value={message}
          style={{
            fontSize: fontSize,
            fontStyle,
            fontWeight,
            color
          }} >
        </textarea>
        </div>
      </div>
    );
  }
}

export default App;
