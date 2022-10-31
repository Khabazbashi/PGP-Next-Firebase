import Quote from "./quote";
import { useEffect, useState } from "react";

const Quotes = ({ quotes, counts, handleClick }) => {
  useEffect(() => {}, [counts]);

  return (
    <>
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
    </>
  );
};

export default Quotes;
