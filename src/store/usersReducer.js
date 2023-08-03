const initialState = {
  users: [],
};

const GET_USERS = 'GET_USERS';
const ADD_USERS = 'ADD_USERS';
const DELETE_USER = 'DELETE_USER';
const DELETE_ALL_USERS = 'DELETE_ALL_USERS';

const transformUsers = (users) => {
  return users.map((user) => ({ id: user.id, name: user.name }));
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        users: transformUsers(action.payload),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case DELETE_ALL_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

const addUsersAction = (payload) => ({
  type: ADD_USERS,
  payload,
});

const getUsersAction = () => ({
  type: GET_USERS,
});

const deleteUserAction = (id) => ({
  type: DELETE_USER,
  payload: id,
});

const deleteAllUsersAction = () => ({ type: DELETE_ALL_USERS });

export {
  usersReducer,
  addUsersAction,
  deleteAllUsersAction,
  deleteUserAction,
  getUsersAction,
  GET_USERS,
};
