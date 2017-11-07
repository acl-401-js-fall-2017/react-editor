import React from 'react';

export default class Form extends React.Component {
    state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
    }

    render() {
      return (
        <form>
          <input 
            placeholder='First name' 
            value={this.state.firstName}
            onChange={event => this.setState({ firstName: event.target.value })}>
          </input>
        </form>
      );
    }
}