// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rental-estate188.firebaseapp.com",
  projectId: "rental-estate188",
  storageBucket: "rental-estate188.appspot.com",
  messagingSenderId: "369406441923",
  appId: "1:369406441923:web:6a50d2bd2f810977d1e576"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);