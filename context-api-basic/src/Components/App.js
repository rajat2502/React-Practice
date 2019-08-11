import React from "react";
import ComponentC from "./ComponentC";
import { UserProvider } from "./UserContext";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>hello world</h1>
        <UserProvider value="rajat">
          <ComponentC />
        </UserProvider>
        <br />
        <ComponentC /> {/* for defaukt value as guest */}
      </>
    );
  }
}

export default App;
