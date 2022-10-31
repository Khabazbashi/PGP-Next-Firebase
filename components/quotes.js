import { useEffect } from "react";
import Quote from "./quote";
import styles from "../styles/Quotes.module.css";

const Quotes = ({ quotes, counts, handleClick }) => {
  useEffect(() => {}, [counts]);

  var animations =
    "https://www.ceciliapelosi.com/wp-content/uploads/2014/05/Doers-Fist-Bump.gif";

  return (
    <div className={styles.container}>
      {quotes.map((quote, index) => {
        return (
          <Quote
            quote={quote}
            key={index}
            count={counts.filter((x) => x.id === quote.id)}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Quotes;
