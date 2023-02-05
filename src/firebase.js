import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_API_K,
  authDomain: "twitter-clone-9bf59.firebaseapp.com",
  projectId: "twitter-clone-9bf59",
  storageBucket: "twitter-clone-9bf59.appspot.com",
  messagingSenderId: "510725957175",
  appId: "1:510725957175:web:85286d2fefdd8f3297c1b2",
});

const db = getFirestore(firebaseApp);

export default db;
