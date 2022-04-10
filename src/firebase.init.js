// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/getAuth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Hv0gitdNte2ZThYw98dDz7ALMA1Y_aM",
  authDomain: "ema-john-simple-authenti-b5423.firebaseapp.com",
  projectId: "ema-john-simple-authenti-b5423",
  storageBucket: "ema-john-simple-authenti-b5423.appspot.com",
  messagingSenderId: "549196275866",
  appId: "1:549196275866:web:668bbcc07e03f534453f23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
