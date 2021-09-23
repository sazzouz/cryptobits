// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1wwQd85uHXgapt2N9_UnB_wo0ie_92ZM",
  authDomain: "cryptobits-fc931.firebaseapp.com",
  projectId: "cryptobits-fc931",
  storageBucket: "cryptobits-fc931.appspot.com",
  messagingSenderId: "585236260589",
  appId: "1:585236260589:web:3aec6c1daca54e0ac98ee4",
  measurementId: "G-C3X0Q6GN87",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
