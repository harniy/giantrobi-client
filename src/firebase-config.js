// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDptlXMd3dT3L2IytQqGeBhBjHnWzpgvyE",
  authDomain: "giantrobi.firebaseapp.com",
  projectId: "giantrobi",
  storageBucket: "giantrobi.appspot.com",
  messagingSenderId: "734255990362",
  appId: "1:734255990362:web:83bff806451e7069b27a63",
  measurementId: "G-18TQRZRD3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)