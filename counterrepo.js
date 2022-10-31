import { db } from "./firebase";
import {
  getDocs,
  collection,
  updateDoc,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

export const counterRepo = {
  handleClick,
  getCounts,
};

async function createQuote(id, count) {
  try {
    const docRef = await setDoc(doc(db, "quotes", id), {
      count: count,
      createdAt: Timestamp.fromDate(new Date()),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getCounts() {
  let data = [];
  const querySnapshot = await getDocs(collection(db, "quotes"));
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });
  return data;
}

async function updateQuote(id, newCount) {
  try {
    const docRef = doc(db, "quotes", id);

    await updateDoc(docRef, {
      count: newCount,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function handleClick(id, count) {
  if (count === 0) {
    createQuote(id, count + 1);
  } else {
    updateQuote(id, count + 1);
  }
}
