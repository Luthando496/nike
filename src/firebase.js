// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCTjxgcFA4bWt3qPJ3VQRzMXr4dfrJcRY",
  authDomain: "nike-bb0d8.firebaseapp.com",
  projectId: "nike-bb0d8",
  storageBucket: "nike-bb0d8.firebasestorage.app",
  messagingSenderId: "458205308142",
  appId: "1:458205308142:web:281612701817ef51b47fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

