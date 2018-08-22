import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Post extends Component {
  render () {
    return (
      <div>
        { this.props.match.params.id }
      </div>
    );
  }
}


Post.propTypes = {};


export default Post;
