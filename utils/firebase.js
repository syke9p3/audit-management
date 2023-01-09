// Import the functions you need from the SDKs you need
import { initializeApp, getApp, } from "firebase/app";
import 'firebase/firestore';
import { getAuth  } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();