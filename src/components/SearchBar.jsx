import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SearchBar.css";

import { setSearch } from "../redux/actions/actionCreators";

const SearchBar = () => {
  const pes = useSelector((state) => state.search.search);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <input
      className="searchBar"
      type="text"
      placeholder="Pesquisa a música"
      value={pes}
      onChange={handleInput}
    />
  );
};

export default SearchBar;
