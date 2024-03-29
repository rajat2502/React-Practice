import React from "react";
import ReactDOM from "react-dom";

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component{
  // using this in a component function
  get name(){
    return 'whatever-your-name-is-goes-here';
  }

  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    const friend = friends[0];
    return (
    	<div>
        <h1>{friend.title}</h1>
        <img 
          src = {friend.src}/>

          {/* using this in component function */}
        <h1>My name is {this.name}.</h1>

        <button onClick={this.scream}>AAAAAH!</button>
      </div>
    )
  }
}

ReactDOM.render(
	<Friend />, document.getElementById("app")
)
