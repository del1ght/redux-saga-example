import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USERS, addUsersAction } from '../store/usersReducer';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function* fetchUsersWorker() {
  const response = yield call(() => fetch(API_URL));
  const users = yield call(() => response.json());
  yield put(addUsersAction(users));
}

export function* fetchUsersWatcher() {
  yield takeEvery(GET_USERS, fetchUsersWorker);
}
