import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import { usersListRequest, logOut } from "../store/actions/users";

import { Avatar } from './index';

class UsersList extends Component {
  componentDidMount() {
    this.props.usersListRequest()
  }

  onLogOut = () => {
    this.props.logOut()
  }

  render() {
    const { usersList, activeUsers, onChatSelect } = this.props;

    return (
      <div className="people-list" id="people-list">
        <button className="log-out-btn" type="button" onClick={this.onLogOut}>
          Log Out
        </button>
        <div className="search">
          <input type="text" placeholder="search"/>
          <i className="fa fa-search"/>
        </div>

        <ul className="list">
          {usersList.map(user => (
            <li
              key={user.id}
              className="clearfix"
            >
              <Link
                to={user.groupId ? `/${user.groupId}` : `/user/${user.id}`}
                onClick={() => onChatSelect(user, user.groupId)}
              >
                <Avatar user={user}/>
                <div className="about">
                  <div className="name">
                    {[user.firstName, user.lastName].join(' ')}
                  </div>
                  <div className="status">
                    <i className={`fa fa-circle ${activeUsers.includes(user.id) ? 'online' : 'offline'}`}/>
                    {activeUsers.includes(user.id) ? 'online' : 'Left ' + moment(user.lastVisit || user.updatedAt).calendar()}
                  </div>
                </div>
              </Link>
            </li>
          ))}

        </ul>
      </div>
    );
  }
}

const mapSateToProps = (state) => ({
  usersList: state.users.usersList,
  activeUsers: state.users.activeUsers,
})

const mapDispatchToProps = {
  usersListRequest,
  logOut
}

const Container = connect(
  mapSateToProps,
  mapDispatchToProps,
)(UsersList)

export default Container;
