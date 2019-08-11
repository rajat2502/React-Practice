import React from "react";

class PureComp extends React.PureComponent {
  render() {
    console.log("purecomp render");
    return <>heeloo................{this.props.name}</>;
  }
}

export default PureComp;
