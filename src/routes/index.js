import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// pages/components
import Login from '../pages/Login';
import Posts from '../pages/Posts';

class PageRouter extends Component {
  isLoggedIn () {
    return this.props.auth.authenticated
  }
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => (
            this.isLoggedIn() ?
              (<Redirect to="/posts"/>) :
              (<Login />)
          )} />
          <Route path="/posts" exact render={() => (
            this.isLoggedIn() ? 
              (<Posts />) : 
              (<Redirect to="/"/>)
          )} />
        </Switch>
      </Router>
    )
  }
}

PageRouter.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PageRouter);