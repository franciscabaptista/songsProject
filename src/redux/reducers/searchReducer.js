import { SEARCH } from "../actions/actionTypes";

const initialState = {
  search: "",
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}

export default searchReducer;
