import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      firstName: 'Michele',
      lastName: 'Greenwood',
      infoBox: 'Fill in your comments here',
      color: '#ff0000',
      fontSize: '24px',
      date: new Date()
    };
  }

  handleFirstNameChange(value) {
    this.setState({ firstName: value });
  }

  handleLastNameChange(value) {
    this.setState({ lastName: value });
  }

  handleColorChange(value) {
    this.setState({ color: value });
  }

  handleCommentChange(value) {
    this.setState({ infoBox: value });
  }

  handleFontSizeChange(value) {
    this.setState({ fontSize: value });
  }

  render() {
    const { firstName, lastName, color, infoBox, fontSize, date } = this.state;
    return (
      <div className="App">
        <header className="App-header" date={this.state.date}>
          <h1 className="App-title">Welcome Michele</h1>
          <p>It is { date.toLocaleTimeString() }</p>
        </header>
        <h1>Michele's React</h1>
        <p>It is { date.getFullYear() }</p>
        <CommentInput infoBox={infoBox} 
          onCommentChange={comment => this.handleCommentChange(comment)}/>
          
        <InputName firstName={firstName} lastName={lastName} 
          color={color} 
          onFirstNameChange={fname => this.handleFirstNameChange(fname)}
          onLastNameChange={lname => this.handleLastNameChange(lname)}
          onColorChange={color => this.handleColorChange(color)}
        /> 
        <DisplayName firstName={firstName}
          lastName={lastName} color={color}
        /><br/>
        <FontSize fontSize={fontSize} lastName={lastName}
          onFontSizeChange={word => this.handleFontSizeChange(word)}
        />
        <Comment infoBox={infoBox}
          infoBoxClass="boxClass"
        />
      </div>
    );
  }
}

class InputName extends Component {
  render() {
    const { firstName, lastName, color, onFirstNameChange, onLastNameChange, onColorChange }=this.props;

    return(
      <div>
        <label>
      First Name: 
          <input name="firstName" value={firstName} 
            onChange={({ target }) => onFirstNameChange(target.value)}/>
        </label><br/>
        <label>
      Last Name: <input name="lastName" value={lastName}
            onChange={({ target }) => onLastNameChange(target.value)}/>
        </label><br/>
        <label>
      Color: <input name="color" type="color" value={color}
            onChange={({ target }) => onColorChange(target.value)}/>
        </label>
      </div>
    );
  }
}

class DisplayName extends Component {
  render() {
    const { firstName, lastName, color }=this.props;
            
    return(
      <div style={{ color }}>
        <span>{firstName.toUpperCase()}</span>
                &nbsp;
        <span>{lastName.toLowerCase()}</span>
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    const { infoBox }=this.props;

    return(
      <div className="box-class">
        <span>{infoBox}</span>
      </div>
    );
  }
}

class CommentInput extends Component {
  render() {
    const { infoBox, onCommentChange }=this.props;

    return(
      <textarea name="info-box" value={infoBox} 
        onChange={({ target }) => onCommentChange(target.value)}/>
    );
  }
}

class FontSize extends Component {
  render() {
    const { lastName, fontSize, onFontSizeChange }=this.props;

    return(
      <div>
        <label>
      Name size: <input name="font-size" value={fontSize} onChange={({ target }) => onFontSizeChange(target.value)}/>
        </label>
        <span style={{ fontSize }}>{lastName}</span>
      </div>
    );
  }
}




export default App;
