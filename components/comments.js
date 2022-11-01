import { useEffect } from "react";
import Comment from "./comment";
import styles from "../styles/Comments.module.css";

const Comments = ({ comments }) => {
  useEffect(() => {}, [comments]);

  return (
    <div className={styles.container}>
      {comments === undefined || comments.length === 0 ? (
        <p className={styles.commentsFiller}>No comments yet</p>
      ) : (
        comments
          .sort((a, b) => (a.date.seconds < b.date.seconds ? 1 : -1))
          .map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })
      )}
    </div>
  );
};

export default Comments;
