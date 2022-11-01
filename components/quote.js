import { useEffect, useState } from "react";
import Comments from "./comments";
import styles from "../styles/Quote.module.css";
import { Timestamp } from "firebase/firestore";

const Quote = ({ quote, data, handleClick, handleSubmit }) => {
  const [thisCount, setThisCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (data === undefined || data.length === 0) {
      setThisCount(0);
      setComments([]);
    } else {
      setThisCount(data[0].data.count);
      setComments(data[0].data.comments);
    }
  }, []);

  async function onClick() {
    if (data === undefined || data.length === 0) {
      handleClick(quote.id, 0);
      setThisCount(1);
    } else {
      handleClick(quote.id, data[0].data.count);
      setThisCount(data[0].data.count + 1);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    handleSubmit(quote.id, input, username, thisCount);
    comments.push({
      comment: input,
      user: username,
      date: Timestamp.fromDate(new Date()),
    });
  }

  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteSection}>
        <p className={styles.quoteText}>"{quote.value}"</p>
        <p className={styles.countText}>Uttered: {thisCount} times</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => onClick()}>
            <p className={styles.buttonText}>add count</p>
          </button>
        </div>
      </div>
      <div className={styles.socialSection}>
        <p className={styles.socialHeaderText}>LATEST COMMENTS</p>
        <Comments comments={comments} />
        <form className={styles.formContainer} onSubmit={onSubmit}>
          <div className={styles.fieldsContainer}>
            <p className={styles.socialHeaderText}>ADD A COMMENT</p>
            <input
              placeholder="Name"
              className={styles.field}
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              placeholder="Write your message here"
              className={styles.field}
              type="text"
              name="comment"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
          </div>
          <button className={styles.submitButton}>
            <img
              className={styles.submitIcon}
              src="https://icons.veryicon.com/png/o/business/middle-stage-background-icon/submission-3.png"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quote;
