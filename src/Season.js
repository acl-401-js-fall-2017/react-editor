import React, { Component } from 'react';

class Season extends Component {

  render() {
    const { season } = this.props;

    return (
      <form onSubmit={this.props.onSeasonSubmit}  style={{ season, padding: '10px' }}>
        <label>
        Chose the current season:
          <select value={season} onChange={this.props.onSeasonChange}>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Season;