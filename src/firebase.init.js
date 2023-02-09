// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5In-jDWtvzBaN-NYo5eHOmOoRFUrSiSE",
  authDomain: "gym-management-cd574.firebaseapp.com",
  projectId: "gym-management-cd574",
  storageBucket: "gym-management-cd574.appspot.com",
  messagingSenderId: "395173114364",
  appId: "1:395173114364:web:a0707bf2a3ce33c4f10279",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
