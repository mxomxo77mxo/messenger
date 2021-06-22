import { takeLatest, call, put } from 'redux-saga/effects'
import { GET_MESSAGES_SUCCESS, GET_MESSAGES_FAIL, GET_MESSAGES_REQUEST } from '../actions/messages';
import Api from '../../Api';

export default function* watcher() {
  yield takeLatest(GET_MESSAGES_REQUEST, getMessages)
}

function* getMessages(action) {
  try {
    const { groupId } = action.payload;
    const { data } = yield call(Api.getMessages, groupId)

    yield put({
      type: GET_MESSAGES_SUCCESS,
      payload: data.data,
    });

  } catch (err) {
    yield put({
      type: GET_MESSAGES_FAIL,
      message: err.message,
    })
  }
}