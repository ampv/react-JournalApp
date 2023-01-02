import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyB-1SUNaZoOaZW_9Lt1ffmx1uxZ-9oLaPE",
    authDomain: "curso-react-ad740.firebaseapp.com",
    projectId: "curso-react-ad740",
    storageBucket: "curso-react-ad740.appspot.com",
    messagingSenderId: "298984998815",
    appId: "1:298984998815:web:3872b604b7ecfe5067dfaa"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)