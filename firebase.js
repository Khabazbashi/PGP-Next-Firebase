import { initializeApp } from "firebase/app";

// ... from project settings
const firebaseConfig = {
  apiKey: "AIzaSyAvYanC0xsVlq0my8De1xSBburNuBJ6zAg",
  authDomain: "pgp-next.firebaseapp.com",
  projectId: "pgp-next",
  storageBucket: "pgp-next.appspot.com",
  messagingSenderId: "71994321047",
  appId: "1:71994321047:web:a2bdf57cdbf64461ac21d2",
};

// Initialize app
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// export the different parts of firebase that you want to use
const db = app.firestore();
const auth = app.auth();
const storage = app.storage();
export { db, auth, storage };
