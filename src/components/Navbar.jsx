import React from "react";
import { useDispatch } from "react-redux";

import "./Navbar.css";

import SearchBar from "./SearchBar";

import { logout } from "../redux/actions/actionCreators";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <h1 className="nomeloja">Loja Música</h1>
      <div>
        <SearchBar />
      </div>
      <div className="iconsNavbar">
        <button className="iconsNavbar" type="onClick">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button
          className="iconsNavbar"
          onClick={() => {
            setIsOpen((open) => !open);
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button
          className="iconsNavbar"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
