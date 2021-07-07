import React from "react";

import styles from "../styles/Home.module.css";
// import card from "../styles/card.css"; // por que no puedo hacer esto??

function Card(props) {
  console.log(props);
  return (
    <>
      <div className={styles.card}>
        <img
          src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png"
          className={styles.logoByGabo}
        />
        <h1 className={styles.title}>{props.ticker}</h1>
        <h3 className={styles.title}>{props.cryptocurrency}</h3>
      </div>
    </>
  );
}

export default Card;
