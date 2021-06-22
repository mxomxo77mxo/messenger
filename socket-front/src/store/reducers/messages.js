import {
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  SET_NOTIFY,
  CLEAR_NOTIFY,
  GET_MESSAGES_FAIL,
} from '../actions/messages';
import { NEW_MESSAGE } from '../actions/socket';

const initialState = {
  messagesList: [],
  notify: {},
  loading: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES_REQUEST: {
      return {
        ...state,
        messagesList: [],
        loading: true
      }
    }
    case SET_NOTIFY : {
      return {
        ...state,
        notify: action.payload,
      }
    }
    case CLEAR_NOTIFY : {
      return {
        ...state,
        notify: {},
      }
    }
    case NEW_MESSAGE: {
      return {
        ...state,
        messagesList: [...state.messagesList, action.payload],
      }
    }
    case GET_MESSAGES_SUCCESS: {
      return {
        ...state,
        messagesList: action.payload,
        loading: false
      }
    }
    case GET_MESSAGES_FAIL: {
      return {
        ...state,
        messagesList: [],
        loading: false
      }
    }
    default: {
      return state
    }
  }
}