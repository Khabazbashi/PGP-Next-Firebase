import { db } from "./firebase";
import {
  getDocs,
  collection,
  arrayUnion,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

export const repo = {
  getData,
  incrementCount,
  addComment,
};

async function getData() {
  let data = [];
  const querySnapshot = await getDocs(collection(db, "quotes"));
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });
  return data;
}

async function incrementCount(id, count) {
  try {
    const docRef = doc(db, "quotes", id);
    setDoc(
      docRef,
      {
        count: count + 1,
        createdAt: Timestamp.fromDate(new Date()),
      },
      { merge: true }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function addComment(id, input, username, count) {
  try {
    const docRef = doc(db, "quotes", id);
    setDoc(
      docRef,
      {
        count: count,
        comments: arrayUnion({
          user: username,
          date: Timestamp.fromDate(new Date()),
          comment: input,
        }),
      },
      { merge: true }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
