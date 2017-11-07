import React, { Component } from 'react';

class Controls extends Component {
  render() {
    const { salutation, statement, color, season, onSalutationChange, onStatementChange, onColorChange, onSeasonChange } = this.props;
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
        <label>
          season:
          <select value={season}
            onChange={({ target }) => onSeasonChange(target.value)} />
        </label>
      </div>
    );
  }
}

export default Controls;