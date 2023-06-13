import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCVtfry_DRrpIwsQPl6QrRnNGVbgYuxr0w",
  authDomain: "petproj-3f605.firebaseapp.com",
  projectId: "petproj-3f605",
  storageBucket: "petproj-3f605.appspot.com",
  messagingSenderId: "58098066821",
  appId: "1:58098066821:web:216031ba40a597c41b10ec"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }