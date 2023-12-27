import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD00UmqXIVHl3FpRaODwUUVIBjqPVjsf0Y",
  authDomain: "otp-2-f20f1.firebaseapp.com",
  projectId: "otp-2-f20f1",
  storageBucket: "otp-2-f20f1.appspot.com",
  messagingSenderId: "642825081625",
  appId: "1:642825081625:web:56efe35413c89f0d916b88",
  measurementId: "G-2C3TKWNGR9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
