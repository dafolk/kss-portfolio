// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkn5hR7VKs7za7xid25V9XE79d7swHV_8",
  authDomain: "kss-portfolio-4a561.firebaseapp.com",
  projectId: "kss-portfolio-4a561",
  storageBucket: "kss-portfolio-4a561.appspot.com",
  messagingSenderId: "790639418765",
  appId: "1:790639418765:web:a7f206a28c1ad6b83171c4",
  measurementId: "G-9WTY4603PC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestoreDatabase = getFirestore(app);
