// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2_b5yE_epKE9RNRp5BF_-K8ktzk22qTQ",
  authDomain: "authention-39ca7.firebaseapp.com",
  projectId: "authention-39ca7",
  storageBucket: "authention-39ca7.appspot.com",
  messagingSenderId: "730304311423",
  appId: "1:730304311423:web:2abbbf8867aa141a730f4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth