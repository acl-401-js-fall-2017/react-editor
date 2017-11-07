import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    const { salutation, statement, color } = this.props;

    return (
      <div style={{ color }} >
        <span>
          {salutation.toUpperCase()}
        </span>
        {' '}
        <span>
          {statement}
        </span>
      </div>
    );
  }
}

export default Greeting;