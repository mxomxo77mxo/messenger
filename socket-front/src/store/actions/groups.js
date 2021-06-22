export const CREATE_DIRECT_REQUEST = 'CREATE_DIRECT_REQUEST';
export const CREATE_DIRECT_SUCCESS = 'CREATE_DIRECT_SUCCESS';
export const CREATE_DIRECT_FAIL = 'CREATE_DIRECT_FAIL';

export function createDirectGroup(memberId, cb) {
  return {
    type: CREATE_DIRECT_REQUEST,
    payload: { memberId, cb }
  }
}
