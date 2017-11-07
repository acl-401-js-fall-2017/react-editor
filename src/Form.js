import React from 'react';

export default class Form extends React.Component {
    
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',

    };
  }

    change = event => {
      this.props.onChange({
        [event.target.name]: event.target.value
      });
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
      });

      this.props.onChange({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
      });
    }

    resetForm = (event) => {
      event.preventDefault();
      this.setState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
  
      });

      this.props.onChange({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
      });
    }

    render() {
      const { firstName, lastName, userName, email, password } = this.state;
      
      return (
        <form>
          <input 
            name='firstName'
            placeholder='First name' 
            value={firstName}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <input 
            name='lastName'
            placeholder='Last name' 
            value={lastName}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <input 
            name='userName'
            placeholder='User name' 
            value={userName}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <input 
            name='email'
            placeholder='email' 
            value={email}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <input 
            name='password'
            type='password'
            placeholder='password' 
            value={password}
            onChange={event => this.change(event)}>
          </input>
          <br />
          <button onClick={event => this.onSubmit(event)}> Submit 
          </button>
          <button onClick={event => this.resetForm(event)}> Cancel 
          </button>
        </form>
      );
    }
}