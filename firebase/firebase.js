// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE1XPNE63BPMznqrT8unSmM4qpawvSclU",
  authDomain: "edvi-main.firebaseapp.com",
  projectId: "edvi-main",
  storageBucket: "edvi-main.appspot.com",
  messagingSenderId: "526594989786",
  appId: "1:526594989786:web:4a5c6af7977f97748e0fe3",
  measurementId: "G-KD36KMF8R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
