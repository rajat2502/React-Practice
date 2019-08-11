import React from "react";

class RefDemo1 extends React.Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
    this.setcbRef = element => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    console.log(this.cbRef.value);
  };

  render() {
    return (
      <>
        <input type="text" ref={this.setcbRef} />
        <button onClick={this.clickHandler}>Click Me</button>
      </>
    );
  }
}

export default RefDemo1;
