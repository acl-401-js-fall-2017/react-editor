import React from 'react';

export default class Form extends React.Component {
    state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
    }

    change = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    onSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }

    render() {
      return (
        <form>
          <input 
            name='firstName'
            placeholder='First name' 
            value={this.state.firstName}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <input 
            name='lastName'
            placeholder='Last name' 
            value={this.state.lastName}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <input 
            name='userName'
            placeholder='User name' 
            value={this.state.userName}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <input 
            name='email'
            placeholder='email' 
            value={this.state.email}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <input 
            name='password'
            type='password'
            placeholder='password' 
            value={this.state.password}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <button onClick={event => this.onSubmit(event)}> Submit 
          </button>
        </form>
      );
    }
}