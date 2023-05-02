import { SET_CURRENT_PAGE, SET_SONGS } from "../actions/actionTypes";

const initialState = {
  songs: [],
  currentPage: 1,
};

function songsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

export default songsReducer;
