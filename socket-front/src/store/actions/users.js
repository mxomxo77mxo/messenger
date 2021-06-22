export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export function loginRequest(email, password) {
  return {
    type: USER_LOGIN_REQUEST,
    payload: { email, password },
  }
}

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export function registerRequest(formData, uploadProcess, cb) {
  return {
    type: REGISTER_REQUEST,
    payload: { formData, uploadProcess, cb },
  }
}

export const USERS_LIST_REQUEST = 'USERS_LIST_REQUEST';
export const USERS_LIST_SUCCESS = 'USERS_LIST_SUCCESS';
export const USERS_LIST_FAIL = 'USERS_LIST_FAIL';

export function usersListRequest() {
  return {
    type: USERS_LIST_REQUEST,
    payload: {},
  }
}

export const LOG_OUT = 'LOG_OUT'

export function logOut() {
  return {
    type: LOG_OUT,
    payload: {},
  }
}

