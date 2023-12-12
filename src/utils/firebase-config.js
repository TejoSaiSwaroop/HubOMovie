import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvUeg6ko5TZNKHWWq07gsA_jeCa4wbg7Q",
  authDomain: "react-hubomovie.firebaseapp.com",
  projectId: "react-hubomovie",
  storageBucket: "react-hubomovie.appspot.com",
  messagingSenderId: "1043398333109",
  appId: "1:1043398333109:web:219a5ae4c7fe90985664fc",
  measurementId: "G-0N5VWZ3WDZ"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);