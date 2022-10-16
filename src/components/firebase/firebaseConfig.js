// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4VfuxccCIhY5yzOWpFjEPZAmljhhyuZA",
    authDomain: "ema-john-resources-react.firebaseapp.com",
    projectId: "ema-john-resources-react",
    storageBucket: "ema-john-resources-react.appspot.com",
    messagingSenderId: "1018343532856",
    appId: "1:1018343532856:web:48166ce065e9f1a0c639cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;