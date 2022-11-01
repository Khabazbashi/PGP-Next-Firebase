import { useEffect } from "react";
import Quote from "./quote";
import styles from "../styles/Quotes.module.css";

const Quotes = ({ quotes, linkedData, handleClick, handleSubmit }) => {
  useEffect(() => {}, [linkedData]);

  return (
    <div className={styles.container}>
      {quotes.map((quote, index) => {
        return (
          <Quote
            quote={quote}
            key={index}
            data={linkedData.filter((x) => x.id === quote.id)}
            handleClick={handleClick}
            handleSubmit={handleSubmit}
          />
        );
      })}
    </div>
  );
};

export default Quotes;
