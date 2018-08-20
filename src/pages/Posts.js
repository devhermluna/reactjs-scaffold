import React, { Component } from 'react';
import Post from '../components/posts/post';
import PostsHOC from '../HOC/PostsHOC';

class Posts extends Component {
  render () {
    const postItems = this.props.posts.map(post => (
      <Post post={post} key={post.id} />
    ));
    return (
      <div>
        <h1>Posts</h1>
        <div className="posts-feed">
          { postItems }
        </div>
      </div>
    );
  }
}

export default PostsHOC(Posts);
