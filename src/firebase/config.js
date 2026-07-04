import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBQHX0vD_I7gO5hjP7MGKxswFsTOTD4toU",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "proyecto-final-react-2125b.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "proyecto-final-react-2125b",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "proyecto-final-react-2125b.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "967701333509",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:967701333509:web:8b30e726a11542ed34be6c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

/** Obtiene el nombre para mostrar: texto antes del @ en el email, o el nombre dado. */
export const getDisplayNameFromEmail = (email) => {
  if (!email) return "";
  const part = email.split("@")[0];
  return part ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() : email;
};