import firebase from 'firebase';

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
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);


export { db };