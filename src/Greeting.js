import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    const { salutation, statement, color } = this.props;

    return (
      <div style={{ color, fontWeight: 'bold', fontSize: '30px', padding: '50px' }} >
        <span>
          {salutation} 
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