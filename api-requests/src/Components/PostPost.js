import React from "react";
import axios from "axios";

class PostPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    console.log(e);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    e.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={this.state.userId}
              onChange={this.changeHandler}
              placeholder="userId"
            />
          </div>

          <div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
              placeholder="title"
            />
          </div>

          <div>
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.changeHandler}
              placeholder="body"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default PostPost;
