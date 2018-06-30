import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../store/actions/posts-action';
import Post from '../components/posts/post';

class Posts extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }
  render() {
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { 
  fetchPosts 
})(Posts);
