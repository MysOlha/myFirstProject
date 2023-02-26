// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkc1Eb6hajglKeHt1suDrNUNhGIutNxQA",
  authDomain: "react-native-pr.firebaseapp.com",
  projectId: "react-native-pr",
  storageBucket: "react-native-pr.appspot.com",
  messagingSenderId: "706748226827",
  appId: "1:706748226827:web:7d64ada8470bf27a6a960e",
  measurementId: "G-JSTWKQ6HGN",
};

const app = initializeApp(firebaseConfig);

export default app;
