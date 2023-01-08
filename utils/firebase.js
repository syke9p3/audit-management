// Import the functions you need from the SDKs you need
import { initializeApp, getApp, } from "firebase/app";
import 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsnqosLFVGbU_vu9LWeKhib5dm_oI91Xg",
  authDomain: "audit-43e0e.firebaseapp.com",
  projectId: "audit-43e0e",
  storageBucket: "audit-43e0e.appspot.com",
  messagingSenderId: "194750760990",
  appId: "1:194750760990:web:b060ab48984b409750060f",
  measurementId: "G-BH9KJB832D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = getApp('audit');



export const auth = getAuth();