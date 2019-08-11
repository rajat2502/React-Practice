import React from "react";
import axios from "axios";

class GetPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMsg: "Error something went wrong"
        });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <>
        <h1>Posts Lists: </h1>
        {posts.length
          ? posts.map((post, item) => {
              return (
                <p key={post.id}>
                  {item}. {post.title}
                </p>
              );
            })
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </>
    );
  }
}

export default GetPosts;
