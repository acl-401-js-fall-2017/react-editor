import React from 'react';

export default class Form extends React.Component {
    state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
    }

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    onSubmit = () => {
      console.log(this.state);
    }

    render() {
      return (
        <form>
          <input 
            name='firstName'
            placeholder='First name' 
            value={this.state.firstName}
            onChange={e => this.change(e)}>
          </input>
          <input 
            name='lastName'
            placeholder='Last name' 
            value={this.state.lastName}
            onChange={e => this.change(e)}>
          </input>
          <input 
            name='userName'
            placeholder='User name' 
            value={this.state.userName}
            onChange={e => this.change(e)}>
          </input>
          <input 
            name='email'
            placeholder='email' 
            value={this.state.email}
            onChange={e => this.change(e)}>
          </input>
          <input 
            name='password'
            type='password'
            placeholder='password' 
            value={this.state.password}
            onChange={e => this.change(e)}>
          </input>
        </form>
      );
    }
}