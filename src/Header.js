import React, { Component } from 'react';

export class Header extends Component {

  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  render() {
    const { date } = this.state;
    return (
      <header className="App-header" date={this.state.date}>
        <h1 className="App-title">Welcome Michele</h1>
        <p>It is { date.toLocaleTimeString() }</p>
      </header>
    );
  }
}