// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhIuIKzemkzIqicpuYDGyUsrk3kL_OIeM",
  authDomain: "chat-app-ab341.firebaseapp.com",
  projectId: "chat-app-ab341",
  storageBucket: "chat-app-ab341.appspot.com",
  messagingSenderId: "101950826180",
  appId: "1:101950826180:web:b3238e1aee97e845eb4b91",
  measurementId: "G-42HXW3W4VY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); //For database

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

const auth = firebase.auth(); //For authentication
const provider = new firebase.auth.GoogleAuthProvider(); //For Google auth

export { auth, provider };
export default db;
