// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0MU9fc8TSTAz0Zc-jcY-cq2vKtbMIb48",
  authDomain: "teamconnect-ae6ef.firebaseapp.com",
  projectId: "teamconnect-ae6ef",
  storageBucket: "teamconnect-ae6ef.appspot.com",
  messagingSenderId: "687840956687",
  appId: "1:687840956687:web:5a7219e6d26aa3c595ee7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;