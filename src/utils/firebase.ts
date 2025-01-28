// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8MtFnY1ePpCbe-p6wbH5crtEak8mmcGU",
  authDomain: "patientsatai.firebaseapp.com",
  projectId: "patientsatai",
  storageBucket: "patientsatai.firebasestorage.app",
  messagingSenderId: "649174574799",
  appId: "1:649174574799:web:70ee21c0092890673bb9ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
