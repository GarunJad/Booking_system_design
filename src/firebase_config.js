// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3m2olZOsx9RNSIhmJX1kinXL1VT3kNqk",
  authDomain: "booking-system-design-91766.firebaseapp.com",
  projectId: "booking-system-design-91766",
  storageBucket: "booking-system-design-91766.firebasestorage.app",
  messagingSenderId: "805325366681",
  appId: "1:805325366681:web:c02f05cde591ca2af95f08",
  measurementId: "G-KVMHTVD5H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);