import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click Me</button>
      </>
    );
  }
}

export default RefDemo;
