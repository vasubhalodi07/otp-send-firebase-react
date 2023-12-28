import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbG9FuW5m7matWNJuNW4eRNmgJSkFiY2U",
  authDomain: "opt-3-874e2.firebaseapp.com",
  projectId: "opt-3-874e2",
  storageBucket: "opt-3-874e2.appspot.com",
  messagingSenderId: "325995639942",
  appId: "1:325995639942:web:45b5bc194e414a791fcd07",
  measurementId: "G-G6HXLDS6MQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
