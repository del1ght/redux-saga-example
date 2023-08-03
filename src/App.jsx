import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { fetchUsers } from './asyncActions/fetchUsers';
import {
  asyncDecreaseCounterAction,
  asyncIncreaseCounterAction,
  decreaseCounterAction,
  increaseCounterAction,
} from './store/counterReducer';
import {
  deleteAllUsersAction,
  deleteUserAction,
  getUsersAction,
} from './store/usersReducer';

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const increaseCounter = (number) => {
    dispatch(increaseCounterAction(number));
  };

  const asyncIncreaseCounter = (number) => {
    dispatch(asyncIncreaseCounterAction(number));
  };

  const decreaseCounter = (number) => {
    dispatch(decreaseCounterAction(number));
  };

  const asyncDecreaseCounter = (number) => {
    dispatch(asyncDecreaseCounterAction(number));
  };

  const deleteUser = (id) => {
    dispatch(deleteUserAction(id));
  };

  const deleteAllUsers = () => {
    dispatch(deleteAllUsersAction());
  };

  const getUsers = () => {
    dispatch(getUsersAction());
  };

  return (
    <div>
      <p>{counter}</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => asyncDecreaseCounter(2)}>-- (async)</button>
        <button onClick={() => decreaseCounter(1)}>-</button>
        <button onClick={() => increaseCounter(1)}> +</button>
        <button onClick={() => asyncIncreaseCounter(2)}>++ (async)</button>
      </div>
      <hr />
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <button onClick={getUsers}>fetch users</button>
        <button onClick={deleteAllUsers}>delete all users</button>
      </div>
      {users.length ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {users.map((user) => {
            return (
              <button
                className='btn'
                key={user.id}
                onClick={() => deleteUser(user.id)}
              >
                {user.name}
              </button>
            );
          })}
        </div>
      ) : (
        <p>no users</p>
      )}
    </div>
  );
}

export default App;
