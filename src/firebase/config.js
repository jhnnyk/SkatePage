// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDeop1dOV9nPFBqkiKKzmBziSj9xSXXhJ0',
  authDomain: 'skatepage72.firebaseapp.com',
  projectId: 'skatepage72',
  storageBucket: 'skatepage72.appspot.com',
  messagingSenderId: '377428459455',
  appId: '1:377428459455:web:97369e146ac5d73212ab0a',
  measurementId: 'G-RL8Y4QV6JN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
