import React, { Component } from 'react';

class Season extends Component {
  render() {
    const { season } = this.props;

    return (
      <form onSubmit={this.handleSeasonSubmit}>
        <label>
        Chose the current season:
          <select value={this.state.value} onChange={this.handleSeasonChange}>
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