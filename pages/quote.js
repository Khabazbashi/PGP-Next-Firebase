import { useEffect, useState } from "react";

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
    <div>
      <p>{quote.value}</p>
      <button onClick={(e) => onClick(e)}>Add</button>
      <p>{thisCount}</p>
    </div>
  );
};

export default Quote;
