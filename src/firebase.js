// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9UYlwMVsqeK7sLMsybFogJGQ254P5ZnQ",
  authDomain: "ag-valley-insurance-50087.firebaseapp.com",
  projectId: "ag-valley-insurance-50087",
  storageBucket: "ag-valley-insurance-50087.appspot.com",
  messagingSenderId: "927658242564",
  appId: "1:927658242564:web:94609271c55350faeefb51",
  measurementId: "G-66ZN4LVDFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);