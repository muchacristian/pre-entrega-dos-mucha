import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBQJHH3zvfEIMa6nEerwGLXVxQA6ZX-bj0",
  authDomain: "cris-react.firebaseapp.com",
  projectId: "cris-react",
  storageBucket: "cris-react.appspot.com",
  messagingSenderId: "334662840370",
  appId: "1:334662840370:web:f5ecf8869a72e2dbf58c2b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);