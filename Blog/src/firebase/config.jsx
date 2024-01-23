import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCjNQ4sQok_lRHyUoxvIdwG3E6d5Zr5efo",
  authDomain: "miniblog-60dfa.firebaseapp.com",
  projectId: "miniblog-60dfa",
  storageBucket: "miniblog-60dfa.appspot.com",
  messagingSenderId: "896530435301",
  appId: "1:896530435301:web:7208cf22b7698454ce580c"
};
console.log('ue')
const app = initializeApp(firebaseConfig);


useEffect(() => {
  const db = getFirestore(app)
}, [app])



export { db }