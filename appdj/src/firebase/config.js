import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBQHX0vD_I7gO5hjP7MGKxswFsTOTD4toU",
  authDomain: "proyecto-final-react-2125b.firebaseapp.com",
  projectId: "proyecto-final-react-2125b",
  storageBucket: "proyecto-final-react-2125b.appspot.com",
  messagingSenderId: "967701333509",
  appId: "1:967701333509:web:8b30e726a11542ed34be6c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)