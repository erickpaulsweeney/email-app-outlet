// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6NvRChfz3ZwZVwMkkmHK0hLGH895z9RQ",
    authDomain: "email-app-93ad2.firebaseapp.com",
    projectId: "email-app-93ad2",
    storageBucket: "email-app-93ad2.appspot.com",
    messagingSenderId: "631779053119",
    appId: "1:631779053119:web:61138bfe68af6772e7b28a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };