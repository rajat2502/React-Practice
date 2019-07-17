class Parent extends React.Component {
  constructor(props) {
    super(props);
		this.changeName = this.changeName.bind(this);
    this.state = { name: 'Frarthur' };
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    })
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName}/>
  }
}

class Child extends React.Component {
  constructor(props) {
		super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);