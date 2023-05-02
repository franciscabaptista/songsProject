import React from "react";

import { useDispatch } from "react-redux";

import { addToCard } from "../redux/actions/actionCreators";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";

const Cards = ({ song }) => {
  const dispatch = useDispatch();
  const addCart = (song) => {
    dispatch(addToCard(song));
    toast.success(`Música ${song.trackName} adicionada ao carrinho`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div className="musicaCard">
      <div className="icons">
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <img
        src={song.artworkUrl100}
        alt={`${song.trackName} by ${song.artistName}`}
      />
      <div className="conteudo">
        <div>
          <h1 className="musicaNome"> {song.trackName} </h1>
          <h3 className="musicaArtista"> {song.artistName} </h3>
        </div>
        <div onClick={() => addCart(song)} className="musicaPreco">
          <button className="botaoPreco" type="onClick">
            <div className="iconsBotao">
              <FontAwesomeIcon icon={faCartShopping} />
              {song.trackPrice}$
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
