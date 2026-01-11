// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4HCB0bhtKkSwioDPno00i3oZ5-x7Tguw",
  authDomain: "twitter-clone-2a38c.firebaseapp.com",
  projectId: "twitter-clone-2a38c",
  storageBucket: "twitter-clone-2a38c.firebasestorage.app",
  messagingSenderId: "825613464546",
  appId: "1:825613464546:web:599bd52282f9e844edbfbb",
  measurementId: "G-FKEXHB2JVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestoreのインスタンスを取得
const db = getFirestore(app);

export default db;
