// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "smartrent-d3395.firebaseapp.com",
  projectId: "smartrent-d3395",
  storageBucket: "smartrent-d3395.appspot.com",
  messagingSenderId: "708957223109",
  appId: "1:708957223109:web:85fd5bc0603d590dd758ac",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
