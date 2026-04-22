// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgcHA1JCpSx7ZD46RbYkXRVD29LIcneh8",
  authDomain: "portofolio-4469b.firebaseapp.com",
  projectId: "portofolio-4469b",
  storageBucket: "portofolio-4469b.firebasestorage.app",
  messagingSenderId: "72040641751",
  appId: "1:72040641751:web:a4cd96d28afdda3ff56c92",
  measurementId: "G-CE48X7BM7Y",
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
