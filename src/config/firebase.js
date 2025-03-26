import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDke6A1Dft2_LT3U7mzOXiTQQ1TduZpAgQ",
  authDomain: "bharatgo-authentication.firebaseapp.com",
  projectId: "bharatgo-authentication",
  storageBucket: "bharatgo-authentication.firebasestorage.app",
  messagingSenderId: "771441333180",
  appId: "1:771441333180:web:f8182037883706c8b691b9",
  measurementId: "G-2XLQHTFENG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
// const analytics = getAnalytics(app);

export {app,auth}
