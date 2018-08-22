import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { removeAuthUser } from '../../store/actions/auth-action';
import { connect } from 'react-redux';
import '../../assets/css/modules/Header.css';

const styles = {
  leftItems: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonMenu: {
    background: 'none',
    border: 'none'
  },
  icon: {
    fontSize: '28px',
    marginRight: '5px'
  }
}

class Header extends Component {
  logoutUser = () => {
    this.props.removeAuthUser()
  }

  render() {
    return (
      <header id="wemade-solutions-header">
        <div style={styles.leftItems}>
          <button onClick={() => this.props.toggleNav()} style={styles.buttonMenu}><i className="icon ion-md-menu" style={styles.icon}></i></button>
          <p className="page-title">Dashboard</p>
        </div>
        <div className="action-buttons">
          <button className="btn btn-rounded btn-danger" onClick={this.logoutUser}>LOGOUT</button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  removeAuthUser: PropTypes.func.isRequired,
  toggleNav: PropTypes.func
}

export default connect(null, {
  removeAuthUser
})(Header);
