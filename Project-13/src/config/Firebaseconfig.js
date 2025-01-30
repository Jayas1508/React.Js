// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKnPSRYdeNJP0ARa7MQ5u5YDJgMHCT2TQ",
  authDomain: "user-recipee.firebaseapp.com",
  projectId: "user-recipee",
  storageBucket: "user-recipee.appspot.com", // Fixed storageBucket
  messagingSenderId: "369882448584",
  appId: "1:369882448584:web:78aa421c8d63b863ccdbfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // Fix: Initialize auth correctly
export const googleProvider = new GoogleAuthProvider();
