import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../store/actions/auth-action';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  sendForm = (e) => {
    e.preventDefault();
    if (this.state.username === 'admin@wemade.no' && this.state.password === 'qweasd') {
      this.props.authenticateUser()
    } else {
      alert('Wrong Credentials')
    }
  }

  render() {
    return (
      <div className="login-page">
        <form onSubmit={this.sendForm}>
          <input type="text" name="username" onChange={this.handleChange} placeholder="username" value={this.state.username}/>
          <input type="password" name="password" onChange={this.handleChange} placeholder="password" value={this.state.password}/>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object,
  authenticateUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {
  authenticateUser
})(Login);
