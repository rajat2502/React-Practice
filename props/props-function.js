// //we can also pass fucntions as props
// class Talker extends React.Component {
//   talk() {
//     let speech = '';
//     for (let i = 0; i < 10000; i++) {
//       speech += 'blah ';
//     }
//     alert(speech);
//   }
  
//   render() {
//     return <Button talk={this.talk}/>;
//   }
// }

// ReactDOM.render(
//   <Talker />,
//   document.getElementById('app')
// );



// this.props.children
class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}


// defaultProps

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {
  text: 'I am a button'
}

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);