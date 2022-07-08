import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "", //username as state property which is supplied as a value to the value attribute
        comments :'',
        topic : 'react'
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event)=>{
    this.setState({
        comments : event.target.value
    })
  }

  handleTopicChange = (event) =>{
    this.setState({
        topic: event.target.value
    })
  }

  handleSubmit = event =>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
  event.preventDefault() //After refresh the previous data will remain 
}

  render() {
    const {username, comments,topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={username} //value attribute of input element
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

//whenever there is change that new value is propagated to handleUsernameChange which sets back the state property user name to the updated value
//when the state is set render method is called again and new value is available to the value property and that is how we have controlled component

export default Form;
