// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiskKoB1aTBQF0l-y0pgrFQg88_xPauPY",
  authDomain: "apartment-clone-react.firebaseapp.com",
  projectId: "apartment-clone-react",
  storageBucket: "apartment-clone-react.appspot.com",
  messagingSenderId: "105874240968",
  appId: "1:105874240968:web:f72fc3d0883a3841b3fcfd",
  measurementId: "G-D63C89VKN3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
