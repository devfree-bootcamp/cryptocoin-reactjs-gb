import React from "react";

import styles from "styles/Home.module.css";
import card from "./Card.module.css";

function Card({ symbol, name, percent_change_24h, price_usd }) {
  return (
    <>
      <div className = {card.cardSingle}>

        <div className = {card.cardLeftBody}>
          <h1>{symbol}</h1>
          <h2>${price_usd}</h2>
          <h1>{percent_change_24h} %</h1>
        </div>

        <div className = {card.cardRightBody}>
          <div className = {card.cardCryptoLogo}>
            <img
              src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png"
            />
          </div>
          <h3>{name}</h3>
        </div>

      </div>
    </>
  );
}

export default Card;
