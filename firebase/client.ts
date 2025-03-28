import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCY9XHLMlGXgp63uuklbPxOwPMZvTDCcEk",
  authDomain: "prepwise-d0ccd.firebaseapp.com",
  projectId: "prepwise-d0ccd",
  storageBucket: "prepwise-d0ccd.firebasestorage.app",
  messagingSenderId: "242924661655",
  appId: "1:242924661655:web:a02776f4c92fad462b72d2",
  measurementId: "G-7BBYX1LC9W"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);