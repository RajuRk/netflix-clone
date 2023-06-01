import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5senjqElj7VHo7-nLyA1LDL5joGKn3kI",
  authDomain: "react-netflix-clone-eadb3.firebaseapp.com",
  projectId: "react-netflix-clone-eadb3",
  storageBucket: "react-netflix-clone-eadb3.appspot.com",
  messagingSenderId: "867244158987",
  appId: "1:867244158987:web:408accf231f19060fe170e",
  measurementId: "G-YZRBT4EWT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);