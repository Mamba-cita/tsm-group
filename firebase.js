// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9DOQG6pm2oNbVDBsUANjj2FAiU_yTCGY",
  authDomain: "tsm-app-de646.firebaseapp.com",
  projectId: "tsm-app-de646",
  storageBucket: "tsm-app-de646.appspot.com",
  messagingSenderId: "838992934029",
  appId: "1:838992934029:web:028310988b9c91a2bcdec4",
  measurementId: "G-EGGC5LSJWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);