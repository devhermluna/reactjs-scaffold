import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrivateRoutes from './PrivateRoutes'

// pages/components
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Dashboard from '../pages/Dashboard';

// pages components
import Header from '../components/shared/header';
import Sidebar from '../components/shared/sidebar';

const PRoutes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/posts/:id', component: Post },
  { path: '/posts', component: Posts }
]

class PageRouter extends Component {
  state = {
    collapse: false
  }

  toggleNavigation = () => {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  createNavigation = () => {
    let { collapse } = this.state
    return (
      <div id="wemade-solutions">
        <Sidebar collapse={collapse}/>
        <div className={'content-wrapper ' + (this.state.collapse ? 'collapse' : '')}>
          <Header collapse={collapse} toggleNav={this.toggleNavigation}/>
          <Switch>
            {PRoutes.map(({ path, component }, index) => <PrivateRoutes key={index} authenticated={this.props.isLoggedIn} path={path} component={component}/> )}
          </Switch>
        </div>
      </div>
    )
  }

  render () {
    return (
      <Router>
        { 
          this.props.isLoggedIn
            ? this.createNavigation()
            : <Login/>
        }
      </Router>
    )
  }
}

PageRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.authenticated
})

export default connect(mapStateToProps)(PageRouter);