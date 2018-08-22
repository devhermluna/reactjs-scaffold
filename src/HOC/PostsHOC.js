import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../store/actions/posts-action';
import PostLoader from '../loaders/PostLoader';

export default (WrappedComponent) => {
  class PostsHOC extends Component {
    state = {
      isFetchingData: true
    }

    componentDidMount () {
      this.getDataPosts()
    }

    shouldComponentUpdate (nextProps, nextState) {
      if (this.props.posts !== nextProps.posts) return true
      else if (this.state.isFetchingData !== nextState.isFetchingData) return true
    }

    async getDataPosts () {
      await this.props.fetchPosts()

      this.setState({
        isFetchingData: false
      })
    }

    render () {
      return this.state.isFetchingData
        ? <PostLoader/> 
        : <WrappedComponent {...this.props}/>
    }
  }

  PostsHOC.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string
      })
    ).isRequired
  };
  
  const mapStateToProps = state => ({
    posts: state.posts.items,
    isLoading: state.posts.isLoading
  });

  return connect(mapStateToProps, {
    fetchPosts
  })(PostsHOC);
}