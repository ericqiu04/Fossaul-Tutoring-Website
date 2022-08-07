import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg8aEVz8WoFqe-BuZest2PK-aBdrq5UNY",
  authDomain: "fossaultutoring-website.firebaseapp.com",
  projectId: "fossaultutoring-website",
  storageBucket: "fossaultutoring-website.appspot.com",
  messagingSenderId: "890638178320",
  appId: "1:890638178320:web:0cd149822c74f1ffbc5295",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};