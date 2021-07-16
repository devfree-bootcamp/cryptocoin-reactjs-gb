import React from "react";

import styles from "styles/Home.module.css";
import card from "./Card.module.css";

function Card({ symbol, name, percent_change_24h, price_usd }) {
  return (
    <>
      <div className = {card.cardSingle}>

        <div className = {card.cardLeftBody}>
          <h2>${price_usd}</h2>
          <h1>{percent_change_24h} %</h1>
        </div>
        <div className={card.verticalLine}></div>
        <div className = {card.cardRightBody}>
          <h1 className = {card.symbol}>{symbol}</h1>
          <h3>{name}</h3>
        </div>

      </div>
    </>
  );
}

// TODO modificar css cuando el name es muy largo. Se rompe

export default Card;
