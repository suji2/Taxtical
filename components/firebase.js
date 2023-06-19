import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Replace this with your Firebase SDK config snippet
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
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);
// Optional: Connect to Firebase Auth emulator
// connectAuthEmulator(auth, 'http://localhost:9099');

// Initialize Firestore
const firestore = getFirestore(app);

export { auth, firestore };