import React, { Component } from 'react';

class Controls extends Component {
  render() {
    const { salutation, statement, color, onSalutationChange, onStatementChange, onColorChange } = this.props;
    return (
      <div>
        <label>
                salutation:
          <input name="salutation" value={salutation}
            onChange={({ target }) => onSalutationChange(target.value)} />
        </label>
        <label>
                statement:
          <input name="statement" value={statement}
            onChange={({ target }) => onStatementChange(target.value)} />
        </label>
        <label>
                  color:
          <input name="color" value={color}
            onChange={({ target }) => onColorChange(target.value)} />
        </label>
      </div>
    );
  }
}

export default Controls;