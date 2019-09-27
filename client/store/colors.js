import axios from 'axios';
// import history from '../history';

/**
 * ACTION TYPES
 */
const GOT_COLORS = 'GOT_COLORS';
const GOT_SINGLE_COLOR = 'GOT_SINGLE_COLOR';
const GOT_COLOR_CATEGORY = 'GOT_COLOR_CATEGORY';
// const REMOVE_USER = 'REMOVE_USER';

/**
 * INITIAL STATE
 */
const initialState = {
  allColors: [],
  singleColor: {},
  colorCategory: {},
  loading: true,
};

/**
 * ACTION CREATORS
 */
const gotColors = colors => ({
  type: GOT_COLORS,
  colors,
});

const gotSingleColor = color => ({
  type: GOT_SINGLE_COLOR,
  color,
});

const gotColorCategory = category => ({
  type: GOT_COLOR_CATEGORY,
  category,
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

export const fetchSingleColor = id => async dispatch => {
  try {
    const res = await axios.get(`/api/colors/${id}`);
    dispatch(gotSingleColor(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const fetchSingleCategory = name => async dispatch => {
  try {
    const res = await axios.get(`/api/categories/${name}`);
    dispatch(gotColorCategory(res.data));
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
      return { ...state, allColors: action.colors, loading: false };
    case GOT_SINGLE_COLOR:
      return { ...state, singleColor: action.color };
    case GOT_COLOR_CATEGORY:
      return { ...state, colorCategory: action.category, loading: false };
    // case REMOVE_USER:
    //   return defaultUser;
    default:
      return state;
  }
}
