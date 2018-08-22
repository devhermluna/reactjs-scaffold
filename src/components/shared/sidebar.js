import React, { Component } from 'react';
import '../../assets/css/modules/Sidebar.css';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  render() {
    return (
      <div id="wemade-solutions-sidebar" className={this.props.collapse ? 'collapse' : ''}>
        Sidebar
      </div>
    );
  }
}

Sidebar.propTypes = {
  collapse: PropTypes.bool
}

export default Sidebar;
