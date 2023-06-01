// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5RaMeGqK5T3EHD7oYGKBEVqTUtVrKZ2A",
  authDomain: "taxtical-8fdfb.firebaseapp.com",
  projectId: "taxtical-8fdfb",
  storageBucket: "taxtical-8fdfb.appspot.com",
  messagingSenderId: "639529931158",
  appId: "1:639529931158:web:133bca7b365e659f08cdb7",
  measurementId: "G-NH8GB08721"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const fireStore = getFirestore(firebase);

export { fireStore };