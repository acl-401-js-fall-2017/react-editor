import React, { Component } from 'react';

class Output extends Component {
  render() {
    const { encrypted, doesComp, dupes, color } = this.props;
    const indicator = doesComp ? 'green' : 'red';
    const subOutput = (
      <div className="subOutput">
        <h3>Hash from Message: </h3>
        <p>{encrypted}</p>
        <h3 style={{ color: indicator }}>MessageX and HashX match</h3>
      </div>
    );
       
    let dupedOutput = subOutput;
    if(dupes > 1) {
      dupedOutput = [];
      for(let i = 0; i < dupes; i++)
        dupedOutput.push(subOutput);
    }
    return (
      <div className="Output" style={{ color: `hsl(${color}, 100%, 50%)` }}>
        <h1>Output</h1>
        {dupedOutput}
      </div>
    );
  }
}

export default Output;