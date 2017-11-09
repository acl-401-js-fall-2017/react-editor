import React, { Component } from 'react';

class Sun extends Component {

  render() {
    const { sun, onSunChange } = this.props;
    
    return (
      <form  style={{ sun, padding: '15px' }}>
        <label>
          The sun is out today:
          <input 
            name="sun" 
            type="checkbox"
            checked={sun}
            onChange={onSunChange} />
        </label>
      </form>  
    );
  }
}

export default Sun;