import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const {name, value}  = event.target;
    
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.username || !this.state.password) {
      alert("please fill out both input fields before submitting.");
    } else {
      alert(`Thank you ${this.state.username}!`)

      this.setState({
        username: "",
        password: ""
      })
    }
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          value={this.state.username}
          name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleInputChange}
        />
        <input
          value={this.state.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
