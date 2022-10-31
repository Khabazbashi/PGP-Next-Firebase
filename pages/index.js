import { useEffect, useState } from "react";
import { counterRepo } from "../counterrepo";
import Quotes from "../components/quotes";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [counts, setCounts] = useState([]);

  const fetchQuotes = async () => {
    const apiResponse = await fetch(
      `https://api.chucknorris.io/jokes/search?query=hand`
    );
    const quotesList = await apiResponse.json();
    setQuotes(quotesList.result);
  };

  const fetchCounts = async () => {
    await counterRepo.getCounts().then((response) => setCounts(response));
    setLoading(false);
  };

  async function handleClick(id, count) {
    await counterRepo.handleClick(id, count);
    fetchCounts();
  }

  useEffect(() => {
    fetchCounts();
    fetchQuotes();
  }, []);

  useEffect(() => {}, [counts, handleClick]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Quotes quotes={quotes} counts={counts} handleClick={handleClick} />
        )}
      </main>
    </div>
  );
}
