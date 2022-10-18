import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD8E7MwKkjNFS_4BYCZdMKei5aW763_Qg",
  authDomain: "to-do-list-c86a1.firebaseapp.com",
  databaseURL: "https://to-do-list-c86a1-default-rtdb.firebaseio.com",
  projectId: "to-do-list-c86a1",
  storageBucket: "to-do-list-c86a1.appspot.com",
  messagingSenderId: "419995127465",
  appId: "1:419995127465:web:028bc1d54e70ef4a4423b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();