import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USERS_LIST_SUCCESS, LOG_OUT } from "../actions/users";
import Account from '../../helpers/Account'
import { SOCKET_ACTIVE_USERS } from "../actions/socket";

const initialState = {
  myAccount: Account.get(),
  token: Account.getToken(),
  usersList: [],
  activeUsers: [],
  activeUser: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        token: '',
        myAccount: {},
      }
    }
    case USERS_LIST_SUCCESS: {
      const { users: usersList } = action.payload.data;
      return {
        ...state,
        usersList,
      }
    }
    case LOG_OUT: {
      Account.delete()
      return {
        ...state,
        usersList: [],
        activeUsers: [],
        token: '',
      }
    }
    case USER_LOGIN_SUCCESS: {
      const { token, user: myAccount } = action.payload.data;
      Account.set(myAccount);
      Account.setToken(token);
      return {
        ...state,
        token,
        myAccount,
      }
    }
    case SOCKET_ACTIVE_USERS: {
      const { users: activeUsers } = action.payload;
      return {
        ...state,
        activeUsers,
      }
    }
    default: {
      return state;
    }
  }
}
