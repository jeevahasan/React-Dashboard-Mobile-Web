import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUcF3LtMXsMFFpmRG_TfbIzfCFSHF0pkg",
  authDomain: "react-dashboard-51d23.firebaseapp.com",
  projectId: "react-dashboard-51d23",
  storageBucket: "react-dashboard-51d23.appspot.com",
  messagingSenderId: "387789158379",
  appId: "1:387789158379:web:8db6977bbab5b6e6c3cbae"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db =  getFirestore(app);
export const storage =  getStorage();