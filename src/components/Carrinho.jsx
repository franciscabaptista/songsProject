import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Carrinho.css";
import { cleanCard, removeFromCard } from "../redux/actions/actionCreators";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const Carrinho = ({ setIsOpen }) => {
  const carrinho = useSelector((store) => store.cart.cartSong);
  const dispatch = useDispatch();
  let acc = 0;
  carrinho.map((song) => (acc = song.trackPrice + acc));

  const finalizePurchase = () => {
    dispatch(cleanCard());
    toast.success("Compra Finalizada");
    setIsOpen((open) => !open);
  };
  const handleRemoveSong = (song) => {
    dispatch(removeFromCard(song));
  };
  return (
    <div className="carrinho">
      <div
        className="blur"
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      ></div>
      <div className="bgcard">
        <div className="closeParent">
          <h1 className="titulo">Carinho de Compras</h1>
          <button
            className="close"
            onClick={() => {
              setIsOpen((s) => !s);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="cartItems">
          {carrinho.map((song) => {
            return (
              <div key={song.trackId} className="cart-row">
                <div>
                  <p>{song.trackName}</p>
                  <p>{song.trackPrice}$</p>
                </div>
                <button
                  className="removermusica"
                  onClick={() => handleRemoveSong(song.trackId)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            );
          })}
        </div>
        <div className="total">
          <p>
            <b>Valor Total : {acc.toFixed(2)}$</b>
          </p>
          <button className="finalizar" onClick={finalizePurchase}>
            <b>Finalizar </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
