import React from "react";
import ComponentE from "./ComponentE";

class ComponentC extends React.Component {
  render() {
    return (
      <>
        <h1>this,is ComponentC</h1>
        <ComponentE />
      </>
    );
  }
}

export default ComponentC;
