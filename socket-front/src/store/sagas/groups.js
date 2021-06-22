import { takeLatest, put, call } from "redux-saga/effects";
import { CREATE_DIRECT_FAIL, CREATE_DIRECT_REQUEST, CREATE_DIRECT_SUCCESS } from "../actions/groups";
import Api from "../../Api";
import { usersListRequest } from "../actions/users";

export default function* watcher() {
  yield takeLatest(CREATE_DIRECT_REQUEST, createDirectGroup)
}

function* createDirectGroup(action) {
  try {
    const { memberId, cb } = action.payload;
    const { data } = yield call(Api.createDirectGroup, memberId)
    yield put({
      type: CREATE_DIRECT_SUCCESS,
      payload: { data },
    })
    yield put(usersListRequest());
    if (cb) {
      cb(data)
    }
  } catch (e) {
    yield put({
      type: CREATE_DIRECT_FAIL,
      message: e.message,
    })
  }
}
