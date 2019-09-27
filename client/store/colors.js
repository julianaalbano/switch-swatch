import axios from 'axios';
// import history from '../history';

/**
 * ACTION TYPES
 */
const GOT_COLORS = 'GOT_COLORS';
// const REMOVE_USER = 'REMOVE_USER';

/**
 * INITIAL STATE
 */
const initialState = {
  allColors: [],
  singleColor: {},
};

/**
 * ACTION CREATORS
 */
const gotColors = colors => ({
  type: GOT_COLORS,
  colors,
});
// const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */
export const fetchColors = () => async dispatch => {
  try {
    const res = await axios.get('/api/colors');
    dispatch(gotColors(res.data));
  } catch (err) {
    console.error(err);
  }
};

// export const auth = (email, password, method) => async dispatch => {
//   let res;
//   try {
//     res = await axios.post(`/auth/${method}`, { email, password });
//   } catch (authError) {
//     return dispatch(getUser({ error: authError }));
//   }

//   try {
//     dispatch(getUser(res.data));
//     history.push('/home');
//   } catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr);
//   }
// };

// export const logout = () => async dispatch => {
//   try {
//     await axios.post('/auth/logout');
//     dispatch(removeUser());
//     history.push('/login');
//   } catch (err) {
//     console.error(err);
//   }
// };

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_COLORS:
      return { ...state, allColors: action.colors };
    // case REMOVE_USER:
    //   return defaultUser;
    default:
      return state;
  }
}
