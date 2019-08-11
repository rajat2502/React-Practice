import React from "react";

class ClickCounterTwo extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    console.log(count);
    return (
      <>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </>
    );
  }
}

export default ClickCounterTwo;
