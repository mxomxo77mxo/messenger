import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import { loginRequest } from "../store/actions/users";

import { WrapperLogOut } from "../components";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
    }
  }

  handleChange = (path, value) => {
    const { formData } = this.state;
    _.set(formData, path, value);
    this.setState({ formData })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { formData } = this.state;
    this.props.loginRequest(formData.email, formData.password);
  }

  render() {
    const { formData } = this.state;
    return (
      <WrapperLogOut>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="email"
              value={formData.email || ''}
              onChange={(ev) => this.handleChange('email', ev.target.value)}/>
            <br/>
            <input
              type="text"
              placeholder="password"
              value={formData.password || ''}
              onChange={(ev) => this.handleChange('password', ev.target.value)}/>
            <br/>
            <button type="submit">Sign in</button>
          </form>
        </div>
      </WrapperLogOut>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  loginRequest,
}
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export default Container;
