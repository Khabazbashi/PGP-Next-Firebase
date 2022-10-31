import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";

export const counterRepo = {
  getCounts,
};

async function getCounts() {
  let data = [];
  const querySnapshot = await getDocs(collection(db, "quotes"));
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });
  return data;
}
