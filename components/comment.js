import { useEffect, useState } from "react";
import moment from "moment";
import styles from "../styles/Comments.module.css";

const Comment = ({ comment }) => {
  const [date, setDate] = useState();

  useEffect(() => {
    var createdAt = moment.unix(comment.date.seconds);
    let diff = moment(createdAt).fromNow();

    setDate(diff);
  }, [comment]);

  return (
    <div className={styles.commentBubble}>
      <p className={styles.commentUsername}>{comment.user}</p>
      <p className={styles.commentDate}>{date}</p>
      <p className={styles.comment}>{comment.comment}</p>
    </div>
  );
};

export default Comment;
