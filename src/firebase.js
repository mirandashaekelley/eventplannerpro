// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK-bYC7hKxGk-QS7ZCaHG14kKaFf_K1X4",
  authDomain: "eventplanner-pro.firebaseapp.com",
  projectId: "eventplanner-pro",
  storageBucket: "eventplanner-pro.appspot.com",
  messagingSenderId: "508687572656",
  appId: "1:508687572656:web:b49f213369efcd8d7e2575",
  measurementId: "G-ENPP9VL6NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);