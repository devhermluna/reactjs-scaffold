import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Post extends Component {
  render() {
    return (
      <div className="post-item">
        <Link to={`/posts/${this.props.post.id}`}>
          <h2>{this.props.post.title}</h2>
        </Link>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
}

export default Post;
