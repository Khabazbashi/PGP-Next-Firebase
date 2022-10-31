import { useEffect, useState } from "react";
import styles from "../styles/Quote.module.css";

const Quote = ({ quote, count, handleClick }) => {
  const [isLoading, setLoading] = useState(true);
  const [thisCount, setThisCount] = useState(0);

  useEffect(() => {
    if (count === undefined || count.length === 0) {
      setThisCount(0);
    } else {
      setThisCount(count[0].data.count);
    }
  }, []);

  async function onClick() {
    if (count === undefined || count.length === 0) {
      handleClick(quote.id, 0);
      setThisCount(1);
    } else {
      handleClick(quote.id, count[0].data.count);
      setThisCount(count[0].data.count + 1);
    }
  }

  useEffect(() => {}, [count, handleClick]);

  return (
    <div className={styles.container}>
      <p className={styles.quote}>"{quote.value}"</p>
      <p className={styles.count}>Uttered: {thisCount} times</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={(e) => onClick(e)}>
          <p className={styles.buttonText}>add count</p>
        </button>
      </div>
    </div>
  );
};

export default Quote;
