import { put, takeEvery } from 'redux-saga/effects';
import {
  ASYNC_DECREASE_COUNTER,
  ASYNC_INCREASE_COUNTER,
  decreaseCounterAction,
  increaseCounterAction,
} from '../store/counterReducer';

const delay = (ms) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

function* increaseCounterWorker({ payload }) {
  yield delay(1000);
  yield put(increaseCounterAction(payload));
}

function* decreaseCounterWorker({ payload }) {
  yield delay(1000);
  yield put(decreaseCounterAction(payload));
}

export function* counterWatcher() {
  yield takeEvery(ASYNC_INCREASE_COUNTER, increaseCounterWorker);
  yield takeEvery(ASYNC_DECREASE_COUNTER, decreaseCounterWorker);
}
