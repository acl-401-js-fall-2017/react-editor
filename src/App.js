import React, { Component } from 'react';
import bcrypt from 'bcryptjs';

import Input from './components/input';
import Output from './components/output';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      toEncrypt: 'your message here',
      encrypted: null,
      salt: 1,

      dupes: 1,
      color: 0,
      colorHistory: [0],

      compMessage: 'if we match',
      compHash: 'you\'ll see green',
      doesComp: false
    };
  }
  
  handleMessageChange(value) {
    this.setState({ toEncrypt: value });
  }
  
  handleSaltChange(value) {
    this.setState({ salt: parseInt(value, 10) });
  }
  
  handleCompMessageChange(value, cb) {
    this.setState({ compMessage: value }, cb);
  }

  handleCompHashChange(value, cb) {
    this.setState({ compHash: value }, cb);
  }
  
  handleEncryption() {
    bcrypt.hash(this.state.toEncrypt, this.state.salt)
      .then(hash => this.setState({ encrypted: hash }));
  }

  handleComparison() {
    bcrypt.compare(this.state.compMessage, this.state.compHash)
      .then(isValid => this.setState({ doesComp: isValid }));
  }

  handleOutputDuplication(value) {
    this.setState({ dupes: value });
  }

  handleColorChange(value) {
    this.setState({ color: value });
    this.setState({ colorHistory: this.state.colorHistory.concat(value) });
  }

  componentDidMount() {
    this.handleEncryption();
    // this.setState({ compMessage: this.state.toEncrypt });
    // this.setState({ compHash: this.state.encrypted });
    // bcrypt.compare(this.state.compMessage, this.state.compHash)
    //   .then(isGood => this.setState({ doesComp: bcrypt.compare() }));
  }
  
  render() {
    const { 
      toEncrypt, 
      encrypted, 
      salt, 
      dupes, 
      color,
      colorHistory,
      doesComp, 
      compMessage, 
      compHash
    } = this.state;

    return (
      <div className="App">
        <Input
          toEncrypt={toEncrypt}
          salt={salt}
          compMessage={compMessage}
          compHash={compHash}
          dupes = {dupes}
          color = {color}
          onMessageChange={
            message => {
              this.handleMessageChange(message);
              this.handleEncryption();
            }
          }
          onSaltChange={salt => {
            this.handleSaltChange(salt);
            this.handleEncryption();
          }}
          onCompMessageChange={
            message => {
              this.handleCompMessageChange(message, this.handleComparison);
            }
          }
          onCompHashChange={
            hash => {
              this.handleCompHashChange(hash, this.handleComparison);
              this.handleComparison();
            }
          }
          onDupeChange={
            value => this.handleOutputDuplication(value)
          }
          onColorChange={
            value => this.handleColorChange(value)
          }
        />
        <Output
          encrypted={encrypted}
          doesComp={doesComp}
          dupes={dupes}
          color = {color}
          colorHistory = {colorHistory}
        />
      </div>
    );
  }
}

export default App;
