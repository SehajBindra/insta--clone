// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDw-9T3iCnGrfB8q7llZib1WxgRoKUyMpw",
  authDomain: "insta-clone-3819e.firebaseapp.com",
  projectId: "insta-clone-3819e",
  storageBucket: "insta-clone-3819e.appspot.com",
  messagingSenderId: "92960264703",
  appId: "1:92960264703:web:ae00978adfd92a2ad597ca",
  measurementId: "G-DZMHP0SQSW",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
