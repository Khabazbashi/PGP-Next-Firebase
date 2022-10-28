import Quote from "./quote";

const Quotes = ({ quotes }) => {
  console.log(quotes);
  return (
    <>
      {quotes.map((quote, index) => {
        return <Quote quote={quote} key={index} />;
      })}
    </>
  );
};

export default Quotes;
