// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import{ getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmirvD-PuZnIxVuo-qfp-t2uqn2X55s4A",
  authDomain: "megha-78447.firebaseapp.com",
  projectId: "megha-78447",
  storageBucket: "megha-78447.appspot.com",
  messagingSenderId: "26009283821",
  appId: "1:26009283821:web:446f9c7481b5650a84b0e4",
  measurementId: "G-WJVHD4EQNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);