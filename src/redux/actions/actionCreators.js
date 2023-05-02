import {
  ADD_SONG,
  REMOVE_SONG,
  SET_CURRENT_PAGE,
  SET_SONGS,
  CLEAN_CARD,
  SEARCH,
  LOGIN_SUCC,
  LOGIN_ERROR,
  LOGOUT,
} from "./actionTypes";

export const addMoreMusics = (songs) => {
  return {
    type: SET_SONGS,
    payload: songs,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};

export const addToCard = (song) => {
  return {
    type: ADD_SONG,
    payload: song,
  };
};

export const removeFromCard = (song) => {
  return {
    type: REMOVE_SONG,
    payload: song,
  };
};

export const cleanCard = () => {
  return {
    type: CLEAN_CARD,
  };
};

export const setSearch = (search) => {
  return {
    type: SEARCH,
    payload: search,
  };
};

export const loginSucc = (user) => {
  return {
    type: LOGIN_SUCC,
    payload: user,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
