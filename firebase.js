import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import config variables from project settings
const firebaseConfig = {
  apiKey: "AIzaSyCk3XwVGZp3YE361i6l1pd3bBa42DHAIT0",
  authDomain: "chuck-quotes-a6754.firebaseapp.com",
  projectId: "chuck-quotes-a6754",
  storageBucket: "chuck-quotes-a6754.appspot.com",
  messagingSenderId: "822648911675",
  appId: "1:822648911675:web:a91f57e333061eca2aa91e",
};

// Initialize app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export components
export { db };
