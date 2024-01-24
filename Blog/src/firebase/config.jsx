import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCjNQ4sQok_lRHyUoxvIdwG3E6d5Zr5efo",
  authDomain: "miniblog-60dfa.firebaseapp.com",
  projectId: "miniblog-60dfa",
  storageBucket: "miniblog-60dfa.appspot.com",
  messagingSenderId: "896530435301",
  appId: "1:896530435301:web:7208cf22b7698454ce580c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }