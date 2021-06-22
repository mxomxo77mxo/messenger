import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createDirectGroup } from "../store/actions/groups";

class StartMessaging extends Component {
  start = () => {
    const { memberId } = this.props;
    this.props.createDirectGroup(memberId, (data) => {
      this.props.history.push(`/${data.group.id}`)
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.start}>Start Conversation</button>
      </div>
    );
  }
}


const mapSateToProps = (state) => ({
  usersList: state.users.usersList,
  activeUsers: state.users.activeUsers,
})

const mapDispatchToProps = {
  createDirectGroup
}

const Container = connect(
  mapSateToProps,
  mapDispatchToProps,
)(StartMessaging)


export default withRouter(Container);
