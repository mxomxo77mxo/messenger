import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { socketInit } from "../store/actions/socket";

class Wrapper extends Component {
  componentDidMount() {
    const { token } = this.props;
    this.props.socketInit(token);
  }

  render() {
    const { token } = this.props;
    if (!token) {
      return <Redirect to="/login"/>;
    }
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.users.token,
});
const mapDispatchToProps = {
  socketInit,
}
const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper)

export default Container;
