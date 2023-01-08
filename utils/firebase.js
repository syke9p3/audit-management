// Import the functions you need from the SDKs you need
import { initializeApp, getApp, } from "firebase/app";
import 'firebase/firestore';
import { getAuth  } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "AIzaSyCNaWKpQQTG3paM45r2wSrof9gwgyT5mk0",
	authDomain: "audit-69d7c.firebaseapp.com",
	projectId: "audit-69d7c",
	storageBucket: "audit-69d7c.appspot.com",
	messagingSenderId: "320319190124",
	appId: "1:320319190124:web:16f7cfa92d263780359449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();