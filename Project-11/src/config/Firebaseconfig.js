// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKnPSRYdeNJP0ARa7MQ5u5YDJgMHCT2TQ",
  authDomain: "user-recipee.firebaseapp.com",
  projectId: "user-recipee",
  storageBucket: "user-recipee.firebasestorage.app",
  messagingSenderId: "369882448584",
  appId: "1:369882448584:web:78aa421c8d63b863ccdbfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);