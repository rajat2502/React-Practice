import React from "react";

const withCounter = WrappedComponent => {
  class WithCounter extends React.Component {
    state = {
      count: 0,
      newCount: 1
    };

    incrementCount = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    };

    incrementNewCount = () => {
      this.setState(prevState => {
        return {
          newCount: prevState.newCount + 1
        };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          newCount={this.state.newCount}
          incrementNewCount={this.incrementNewCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
