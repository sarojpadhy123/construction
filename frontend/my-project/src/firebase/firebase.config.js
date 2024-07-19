// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGBuMciYQRPsVStLzKkOOGgnhef9c3kPk",
  authDomain: "mern-construction.firebaseapp.com",
  projectId: "mern-construction",
  storageBucket: "mern-construction.appspot.com",
  messagingSenderId: "938170506106",
  appId: "1:938170506106:web:93c9a86f19b2af3c4a14c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;