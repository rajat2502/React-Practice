import React from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";

class ComponentE extends React.Component {
  render() {
    return (
      <>
        <h1>this,is ComponentE</h1>
        <h3>hello {this.context}</h3>
        <ComponentF />
      </>
    );
  }
}

ComponentE.contextType = UserContext;

export default ComponentE;
