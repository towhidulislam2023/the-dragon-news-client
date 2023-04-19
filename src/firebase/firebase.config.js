// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM4yGmgy5lM4pbvKDlyqF1n9t74omSrv0",
    authDomain: "the-dragon-news-3bfb4.firebaseapp.com",
    projectId: "the-dragon-news-3bfb4",
    storageBucket: "the-dragon-news-3bfb4.appspot.com",
    messagingSenderId: "145750142353",
    appId: "1:145750142353:web:aa37b63fb110c486613e30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app