import React from "react";

class PropFunctionDemo extends React.Component {
  render() {
    return <>{this.props.name(false)}</>;
  }
}

export default PropFunctionDemo;
