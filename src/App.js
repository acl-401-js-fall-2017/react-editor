import React, { Component } from 'react';
import Form from './Form';

class App extends Component {

  constructor() {
    super();
    this.state = {
      fields: {}
    };
  }

  onChange = updatedValues => {
    this.setState({ 
      fields: {
        ...updatedValues
      }
    });
  }

  render() {
    const { fields } = this.state;

    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <p>
          {JSON.stringify(fields, null, 2)}
        </p>
      </div>
    );
  }
}

export default App;
