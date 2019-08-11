import React from "react";
import { UserConsumer } from "./UserContext";

class ComponentF extends React.Component {
  render() {
    return (
      <>
        <h1>this,is ComponentF</h1>
        <UserConsumer>
          {name => {
            return <h3>Hello {name}</h3>;
          }}
        </UserConsumer>
      </>
    );
  }
}

export default ComponentF;
