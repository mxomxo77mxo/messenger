import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';

import { registerRequest } from "../store/actions/users";

import { WrapperLogOut, FileInput } from "../components";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      process: '',
      formData: {
        firstName: '',
      },
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
    this.props.registerRequest(formData, (v) => {
      this.setState({ process: v.loaded / v.total * 100 })
    }, () => {
      console.log(45)
    });
  }

  render() {
    const { formData, process } = this.state;
    return (
      <WrapperLogOut>
        <div>
          {process}
          <h2>Registration</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName || ''}
              onChange={(ev) => this.handleChange('firstName', ev.target.value)}/>
            <br/>
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName || ''}
              onChange={(ev) => this.handleChange('lastName', ev.target.value)}/>
            <br/>
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

            <FileInput
              onChange={(ev, files) => this.handleChange('avatar', files[0])}/>
            <br/>

            <button>Sign in</button>
          </form>
        </div>
      </WrapperLogOut>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  registerRequest,
}
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export default Container;
