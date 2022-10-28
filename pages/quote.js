const Quote = ({ quote }) => {
  return (
    <div>
      <p>{quote.value}</p>
      <p>Charlie utterances: </p>
      <button>Add</button>
    </div>
  );
};

export default Quote;
