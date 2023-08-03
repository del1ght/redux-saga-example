import { all } from 'redux-saga/effects';
import { counterWatcher } from './counterSaga';
import { fetchUsersWatcher } from './usersSaga';

export function* rootSaga() {
  yield all([fetchUsersWatcher(), counterWatcher()]);
}
