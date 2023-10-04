// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGY4voB7PBmh96vQADF0brAT22WMZ3gWQ",
    authDomain: "dragon-news-resources-584a9.firebaseapp.com",
    projectId: "dragon-news-resources-584a9",
    storageBucket: "dragon-news-resources-584a9.appspot.com",
    messagingSenderId: "455838186790",
    appId: "1:455838186790:web:c28a990febe9bc38a915e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;