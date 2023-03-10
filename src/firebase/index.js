import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYkyALn9P9AuO1ZuB7s4L2qRhrq0bgvPs",
  authDomain: "react-dashboard-380206.firebaseapp.com",
  projectId: "react-dashboard-380206",
  storageBucket: "react-dashboard-380206.appspot.com",
  messagingSenderId: "112157525777",
  appId: "1:112157525777:web:8a716358a156c0b5502eb0"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db =  getFirestore(app);
export const storage =  getStorage();