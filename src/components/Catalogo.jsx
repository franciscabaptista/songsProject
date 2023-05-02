import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Catalogo.css";

import Navbar from "./Navbar";
import Carrinho from "./Carrinho";

import Pagination from "../components/Pagination";
import Cards from "../components/Cards";

import { LIMIT } from "../redux/actions/actionTypes";
import { setCurrentPage } from "../redux/actions/actionCreators";

function Catalogo() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const currentPage = useSelector((store) => store.songs.currentPage);

  const songs = useSelector((store) => store.songs.songs);

  const input = useSelector((state) => state.search.search);
  const filterSongs = songs.filter((song) =>
    song.trackName.toLowerCase().includes(input.toLowerCase())
  );

  const startIndex = (currentPage - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;
  const currentList = filterSongs.slice(startIndex, endIndex);

  const pageCount = Math.ceil(songs.length / LIMIT);

  //Pagination
  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <Carrinho setIsOpen={setIsOpen} />}
      <div className="musicaLista">
        {currentList.map((song) => (
          <Cards key={song.trackId} song={song} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        pageCount={pageCount}
      />
    </div>
  );
}

export default Catalogo;
