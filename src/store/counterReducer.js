const initialState = {
  counter: 0,
};

const INCREASE_COUNTER = 'INCREASE_COUNTER';
const ASYNC_INCREASE_COUNTER = 'ASYNC_INCREASE_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';
const ASYNC_DECREASE_COUNTER = 'ASYNC_DECREASE_COUNTER';

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + action.payload };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const increaseCounterAction = (payload) => ({
  type: INCREASE_COUNTER,
  payload,
});
const asyncIncreaseCounterAction = (payload) => ({
  type: ASYNC_INCREASE_COUNTER,
  payload,
});

const decreaseCounterAction = (payload) => ({
  type: DECREASE_COUNTER,
  payload,
});
const asyncDecreaseCounterAction = (payload) => ({
  type: ASYNC_DECREASE_COUNTER,
  payload,
});

export {
  counterReducer,
  increaseCounterAction,
  decreaseCounterAction,
  asyncIncreaseCounterAction,
  asyncDecreaseCounterAction,
  ASYNC_INCREASE_COUNTER,
  ASYNC_DECREASE_COUNTER,
};
