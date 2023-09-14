// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvZc1E-ibjdVWdpvP58kgCeamJ862qPkE",
  authDomain: "lizzy-epost.firebaseapp.com",
  projectId: "lizzy-epost",
  storageBucket: "lizzy-epost.appspot.com",
  messagingSenderId: "369965565948",
  appId: "1:369965565948:web:fb81240a65fb73b1651479",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
