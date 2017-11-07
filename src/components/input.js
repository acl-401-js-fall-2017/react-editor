import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { toEncrypt, 
      salt, 
      dupes, 
      color,
      compMessage, 
      compHash, 
      onMessageChange, 
      onSaltChange, 
      onCompMessageChange, 
      onCompHashChange, 
      onDupeChange,
      onColorChange         
    } = this.props;

    return (
      <div className="Input">
        <h1>Input</h1>
        <label> Message:
          <textarea
            value={toEncrypt}
            onChange={({ target }) => onMessageChange(target.value)}
          />
        </label>
        <label> Salt:
          <select
            value={salt}
            onChange={({ target }) => onSaltChange(target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>
        <br/>
        <br/>
        <label> MessageX:
          <textarea
            value={compMessage}
            onChange={({ target }) => onCompMessageChange(target.value)}
          />
        </label>
        <label> HashX:
          <textarea
            value={compHash}
            onChange={({ target }) => onCompHashChange(target.value)}
          />
        </label>
        <br/>
        <br/>
        <label> Duplicate?
          <select
            value={dupes}
            onChange={({ target }) => onDupeChange(target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>
        <br/>
        <br/>
        <label> Try a Color (0-255): 
          <input 
            value={color}
            onChange={({ target }) => onColorChange(target.value)}
          />
        </label>
      </div>
    );
  }
}

export default Input;