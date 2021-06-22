export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_FAIL = 'GET_MESSAGES_FAIL';

export function getMessages(groupId) {
  return {
    type: GET_MESSAGES_REQUEST,
    payload: { groupId },
  }
}

// Notifies
export const SET_NOTIFY = 'MESSAGE_NOTIFY'
export const CLEAR_NOTIFY = 'CLEAR_NOTIFY'
export function clearNotify() {
  return {
    type: CLEAR_NOTIFY,
    payload: {}
  }
}
