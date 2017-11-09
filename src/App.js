import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      salutation: 'Hello', 
      name: 'Defaut name',
      color: '#fffff',
      comment: 'Leave a super cool comment!!!',
      fontSize: '100px',
      check: false,
      fontFamily: 'serif'
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
  handleFontChange(value){
    this.setState({ fontSize: value})
  }
  handleCheck(value){
    this.state.check ? value = false : value = true;
    this.setState({ check: value })
  }
  handleSelect(value){
    this.setState({ fontFamily: value})
  }


  render() {

    const { salutation, name, color, comment, fontSize, check, fontFamily} = this.state;
    return (
      <div className="App">
        <Controls salutation={salutation} name={name} comment={comment} fontSize={fontSize}
          onSalutationChange={salutation => this.handleSalutationChange(salutation)}
          onNameChange={name => this.handleNameChange(name)}
          onColorChange={color => this.handleColorChange(color)}
          onCommentChange={comment => this.handeleCommentChange(comment)}
          onFontChange={ fontsize => this.handleFontChange(fontsize)}
          onCheck={ check => this.handleCheck(check)}
          onSelect={ select => this.handleSelect(select)}
        />
        <Greeting salutation={salutation} fontSize={fontSize}
          color={color} name={name} specialClass="weird"
        />
        <Comment comment={comment} color={color} fontSize={fontSize}
        />
        <Poem check={ check } fontFamily={fontFamily}/>
      </div>
    );
  }
}

class Controls extends Component {
  render(){
    const { salutation, name, color, comment, fontSize, onCheck, onSelect, onSalutationChange, onNameChange, onColorChange, onCommentChange, onFontChange} = this.props;
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
        <br/>
        <label>
           Size: <input name="fontsize" value={fontSize}
            onChange={({ target }) => onFontChange(target.value)}/>
        </label>
        <br/>
        <label>
           Would you like to read a poem?: <input type="checkbox" name="fontsize" 
            onChange={({ target }) => onCheck(target.value)}/>
        </label>
        <br/>
        <label>
           Pick a poem font: 
           <select onChange={({ target }) => onSelect(target.value)}>
              <option value="monospace">monospace</option>
              <option value="cursive">cursive</option>
              <option value="fantasy">fantasy</option>
              <option value="system-ui">system-ui</option>
           </select> 
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
        <br/>
        <span>{name}</span>
      </div>
    );
  }
}

class Comment extends Component {
  render(){
    const { color, comment, fontSize } =this.props;
    return (
      <div style={{ color }}>
        <span style={{ fontSize }}>{comment}</span>
      </div>
    );
  }
}

class Poem extends Component {
  render(){
    const { check, fontFamily } = this.props;
    const poem = `Two roads diverged in a yellow wood,
    And sorry I could not travel both
    And be one traveler, long I stood
    And looked down one as far as I could
    To where it bent in the undergrowth;
    
    Then took the other, as just as fair,
    And having perhaps the better claim,
    Because it was grassy and wanted wear;
    Though as for that the passing there
    Had worn them really about the same,
    
    And both that morning equally lay
    In leaves no step had trodden black.
    Oh, I kept the first for another day!
    Yet knowing how way leads on to way,
    I doubted if I should ever come back.
    
    I shall be telling this with a sigh
    Somewhere ages and ages hence:
    Two roads diverged in a wood, and I—
    I took the one less traveled by,
    And that has made all the difference.`
    return (
      <p style={{ fontFamily }}>{check && poem}</p>
    );
  }
}

export default App;
