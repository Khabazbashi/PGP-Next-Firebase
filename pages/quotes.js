import Quote from "./quote";
import { useEffect } from "react";

const Quotes = ({ quotes, counts }) => {
  useEffect(() => {}, [counts]);

  return (
    <>
      {quotes.map((quote, index) => {
        return (
          <Quote
            quote={quote}
            key={index}
            count={counts.filter((x) => x.id === quote.id)}
          />
        );
      })}
    </>
  );
};

export default Quotes;
