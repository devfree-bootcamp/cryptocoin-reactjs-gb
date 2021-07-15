import { useEffect, useState } from 'react';
import Head from "next/head";
import styles from "styles/Home.module.css";

import Card from "components/card";

export default function Home() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    try {
      fetch('/api/coins')
        .then(response => response.json())
        .then(data => { console.log(data.data); setCoins(data.data)});
    } catch (error) {
        console.error(error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto coin App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Por que se pone coins && ?? */}
      <div className={styles.container}>
        { coins && coins.map(({ id, symbol, name, nameid, percent_change_24h, price_usd }) => (           
            <Card 
            key={id + nameid} 
            name={name} 
            symbol={symbol} 
            percent_change_24h = {percent_change_24h}
            price_usd = {price_usd}
            />
          ))
        }
      </div>

      {/* Para modificar el Card */}
      {/* <div className={styles.container}>
        <Card cryptocurrency={"Binace Coin"} ticker={"BNB"} price={"12000"} today={"2.5"} />
      </div> */}

      <footer className={styles.footer}>
        <a
          href="https://pokemoon.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Target{" "}
          <img
            src="https://pokemoon.netlify.app/favicon.ico"
            alt="Vercel Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
