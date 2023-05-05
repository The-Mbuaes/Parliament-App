// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3P0YZavjkOFdxTtEJknHbQHWR0XjRB3U",
  authDomain: "parliament-app-899cc.firebaseapp.com",
  projectId: "parliament-app-899cc",
  storageBucket: "parliament-app-899cc.appspot.com",
  messagingSenderId: "829604341946",
  appId: "1:829604341946:web:b2c7268100ff4b8ee57a83",
  measurementId: "G-KG2DZEK43M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);