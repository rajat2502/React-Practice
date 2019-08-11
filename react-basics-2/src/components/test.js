import React, { Component } from "react";

class Test extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  firstChange = ev => {
    const elem = ev.target;
    this.setState({
      [elem.name]: elem.value
    });
  };

  render() {
    return (
      <div>
        Hiii
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.firstChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.firstChange}
        />
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
      </div>
    );
  }
}
export default Test;
