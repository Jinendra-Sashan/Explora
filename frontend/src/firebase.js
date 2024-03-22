import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE3WLP1K-WKHWu1GpCn_rAnDa0TDvEgYY",
  authDomain: "explora-2688d.firebaseapp.com",
  projectId: "explora-2688d",
  storageBucket: "explora-2688d.appspot.com",
  messagingSenderId: "461256565308",
  appId: "1:461256565308:web:704b56c39395acf3f19939",
  measurementId: "G-Z5KYH8BTD4",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
