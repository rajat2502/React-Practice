class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Rajat' };
  }

  render() {
    return <Child name={this.state.name} />;
  }
}

class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>
  }
}



ReactDOM.render(
	<Parent />, document.getElementById('app')
)