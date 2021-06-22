import { fork, all } from 'redux-saga/effects';
import users from './users'
import groups from './groups'
import messages from './messages'

export default function* watchers() {
  return yield all([
    users,
    groups,
    messages,
  ].map(fork))
}
