import { ADD_SONG, REMOVE_SONG, CLEAN_CARD } from "../actions/actionTypes";

const initialState = {
  cartSong: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SONG:
      const songselect = state.cartSong.findIndex(
        (song) => song.trackId === action.payload.trackId
      );
      if (songselect !== -1) return state;
      console.log(action);
      return {
        ...state,
        cartSong: [...state.cartSong, action.payload],
      };
    case REMOVE_SONG:
      return {
        ...state,
        cartSong: state.cartSong.filter(
          (song) => song.trackId !== action.payload
        ),
      };
    case CLEAN_CARD:
      return initialState;

    default:
      return state;
  }
}
export default cartReducer;
