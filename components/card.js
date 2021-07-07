import React from "react";

import card from "../styles/card";
import styles from "../styles/Home.module.css";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className={styles.card}>
        <h1 className={card.title}>{props.cryptocurrency}</h1>
        <p>qwerty</p>
      </div>
    </>
  );
}

export default Card;
