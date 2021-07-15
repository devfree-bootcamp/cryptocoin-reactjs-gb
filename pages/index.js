import { useEffect, useState } from 'react';
import Head from "next/head";
import styles from "styles/Home.module.css";

import Card from "components/card";

const cardListData = [
  {
    cryptocurrency: "Bitcoin",
    ticker: "BTC",
    price: "35.000 usd",
    color: "green",
  },
  {
    cryptocurrency: "Ethereum",
    ticker: "ETH",
    price: "2.300 usd",
    color: "green",
  },
  {
    cryptocurrency: "Litecoin",
    ticker: "LTC",
    price: "140 usd",
    color: "red",
  },
  {
    cryptocurrency: "Binace Coin",
    ticker: "BNB",
    price: "330 usd",
    color: "yellow",
  },
];

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
      <div className={styles.container}>
        { coins && coins.map(coin => (           
            <Card key={coin.key + coin.name} cryptocurrency={coin.name} ticker={coin.symbol} />
          ))
        }
      </div>
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