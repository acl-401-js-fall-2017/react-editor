import React, { Component } from 'react';

class Output extends Component {
  render() {
    const { encrypted, doesComp, dupes, color } = this.props;
       
    let dupedOutput = (
      <div className="subOutput">
        <h3>Hash from Message: </h3>
        <p>{encrypted}</p>
        <br/>
        <h3>MessageX and HashX match:</h3>
        <p>{doesComp}</p>
      </div>
    );
    if(dupes > 1) {
      dupedOutput = [];
      for(let i = 0; i < dupes; i++)
        dupedOutput.push(
          <div className="subOutput">
            <h3>Hash from Message: </h3>
            <p>{encrypted}</p>
            <br/>
            <h3>MessageX and HashX match:</h3>
            <p>{doesComp}</p>
          </div>
        );
    }
    return (
      <div className="Output" style={{ color: `hsl(${color}, 100%, 50%)` }}>
        {dupedOutput}
      </div>
    );
  }
}

export default Output;