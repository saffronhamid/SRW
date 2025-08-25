// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Ig1-P4lKmNq8NjNtNMwWZjbIY7zLYfU",
  authDomain: "smartrent-d3395.firebaseapp.com",
  projectId: "smartrent-d3395",
  storageBucket: "smartrent-d3395.firebasestorage.app",
  messagingSenderId: "708957223109",
  appId: "1:708957223109:web:85fd5bc0603d590dd758ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
