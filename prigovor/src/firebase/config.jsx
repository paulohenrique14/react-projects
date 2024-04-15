
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDL3LyN3EP-TPuEvg0r_c7GRTMC5Y5aM54",
  authDomain: "prigovor-de32a.firebaseapp.com",
  projectId: "prigovor-de32a",
  storageBucket: "prigovor-de32a.appspot.com",
  messagingSenderId: "1026456511760",
  appId: "1:1026456511760:web:22e7eddf70819bf65c7195",
  measurementId: "G-71FP1GE618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db}