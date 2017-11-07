import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      salutation: 'Hello', 
      name: 'Defaut name',
      color: '#fffff',
      comment: 'Leave a super cool comment!!!'
    }
  }

  handleSalutationChange(value){
    this.setState({ salutation: value});
  }

  handleNameChange(value){
    this.setState({ name: value});
  }

  handleColorChange(value){
    this.setState({ color: value})
  }
  handeleCommentChange(value){
    this.setState({ comment: value})
  }


  render() {

    const { salutation, name, color, comment } = this.state;
    return (
      <div className="App">
        <Controls salutation={salutation} name={name} comment={comment}
          onSalutationChange={salutation => this.handleSalutationChange(salutation)}
          onNameChange={name => this.handleNameChange(name)}
          onColorChange={color => this.handleColorChange(color)}
          onCommentChange={comment => this.handeleCommentChange(comment)}
        />
        <Greeting salutation={salutation}
          color={color} name={name} specialClass="weird"
        />
        <Comment comment={comment} color={color}
        />
      </div>
    );
  }
}

class Controls extends Component {
  render(){
    const { salutation, name, color, comment, onSalutationChange, onNameChange, onColorChange, onCommentChange} = this.props;
    return (
      <div>
        <label>
          salutation:
          <input name="salutation" value={salutation}
            onChange={({ target }) => onSalutationChange(target.value)}/>
        </label>
        <br/>
        <label>
          name: <input name="name" value={name}
            onChange={({ target }) => onNameChange(target.value)}/>
        </label>
        <br/>
        <label>
          color: <input name="color" type="color" value={color}
            onChange={({ target }) => onColorChange(target.value)}/>
        </label>
        <br/>
        <label>
          comment: <input name="comment" value={comment}
            onChange={({ target }) => onCommentChange(target.value)}/>
        </label>
      </div>
    );
  }
}

class Greeting extends Component {
  render(){
    const { salutation, name, color, specialClass } = this.props;

    return (
      <div style={{ color }} className={specialClass}>
        <span>{salutation.toUpperCase()}</span>
        <span>{name}</span>
      </div>
    );
  }
}

class Comment extends Component {
  render(){
    const { color, comment } =this.props;

    return (
      <div style={{ color }}>
        <span>{comment}</span>
      </div>
    );
  }
}

export default App;
