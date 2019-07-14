// class App extends React.Component {
// 	// constructor method begins here:
// 	constructor(props){
//     super(props);
//     this.state = {
// 			 title: 'Best App'
//     }
//   }
	
//   render() {
//     return (
//       <h1>
//         {this.state.title}
//       </h1>
//     );
//   }
// }

// ReactDOM.render(
// 	<App />, document.getElementById("app")
// )


// note: in React, whenever you define an event handler that uses this, you need to add this.methodName = this.methodName.bind(this) to your constructor function.

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  				Change color
				</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));

// Note: this.setState Automatically Calls render
// Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.