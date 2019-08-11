import React from "react";
import withCounter from "./withCounter";

class HoverCounter extends React.Component {
  render() {
    const { count, newCount, incrementCount, incrementNewCount } = this.props;
    return (
      <>
        <button onMouseOver={incrementCount}>
          {this.props.name} Hovered {count} times
        </button>
        <br />
        <button onMouseOver={incrementNewCount}>
          New Hovered {newCount} times
        </button>
      </>
    );
  }
}

export default withCounter(HoverCounter);
