
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCdW5FE604dcQCPSnKWNFv9OWmACMhYk4I",
    authDomain: "crud-1a1f8.firebaseapp.com",
    projectId: "crud-1a1f8",
    storageBucket: "crud-1a1f8.appspot.com",
    messagingSenderId: "1054066617231",
    appId: "1:1054066617231:web:e1db0e3cfe472aaaa239fa"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);