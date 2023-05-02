import { createStore } from "redux";
import { combineReducers } from "redux";

import songsReducer from "./reducers/songsReducer";
import cartReducer from "./reducers/carrinhoReducer";
import searchReducer from "./reducers/searchReducer";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
  songs: songsReducer,
  cart: cartReducer,
  search: searchReducer,
  user: userReducer,
});

let store = createStore(reducer);

export default store;
