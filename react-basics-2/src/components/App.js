import React from "react";
// import PortalDemo from "./PortalDemo";
// import ClickCounter from "./ClickCounter";
// import HoverCounter from "./HoverCounter";
// import PureComp from "./PureComp";
// import MemoComp from "./MemoComp";
// import RefDemo from "./RefDemo";
// import RefDemo1 from "./RefDemo1";
// import FocusInput from "./FocusInput";
// import FRParentInput from "./FRParentInput";
// import Hero from "./Hero";
// import ErrorBoundary from "./ErrorBoundary";
// import Test from './test'
// import PropFunctionDemo from './PropFunctionDemo'
import RenderPropsDemo from "./RenderPropsDemo";
import ClickCounterTwo from "./ClickCounterTwo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "rajat"
    };
  }

  // componentDidMount() {
  //   setInterval(
  //     () =>
  //       this.setState({
  //         name: "rajat"
  //       }),
  //     2000
  //   );
  // }

  render() {
    console.log("parent render");

    return (
      <>
        <RenderPropsDemo
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />

        {/* <PropFunctionDemo  name={(IsloggedIn) => IsloggedIn ? 'rajat' : 'Guest' } /> */}
        {/* <ClickCounter /> */}

        {/* <Test /> */}
        {/* <HoverCounter name='rajat'/> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Spiderman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <RefDemo1 /> */}
        {/* <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} /> */}
        {/* <RefDemo /> */}
      </>
    );
  }
}

export default App;
