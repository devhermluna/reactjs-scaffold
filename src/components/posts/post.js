import React, { Component } from 'react';


class Post extends Component {
  render() {
    return (
      <div className="post-item">
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
}

export default Post;
