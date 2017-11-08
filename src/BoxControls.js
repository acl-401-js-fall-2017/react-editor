import React, { Component } from 'react';


export default class BoxControls extends Component{
  render(){

    return( 
      <div className="controls">
        <select 
          value={this.props.borderStyle}
          /* longer but give control over what you pass */
          onChange={({ target:{ value } }) => this.props.onBorderChange(value)}
        >
          <option value="dashed">Dashed</option>
          <option value="solid">Solid</option>
          <option value="dotted">Dotted</option>
        </select>
        
        <input 
          name="color"
          type="color"
          value={this.props.color}
          /* shorter but needs .bind and no control over what you pass */
          onChange={this.props.onColorChange}
        />
        
        <input 
          name="width"
          value={this.props.width}
          onChange={this.props.onWidthChange}
        />
        
        <input 
          name="height"
          value={this.props.height}
          onChange={this.props.onHeightChange}
        /> 
      </div>
                  
    );
  }
}