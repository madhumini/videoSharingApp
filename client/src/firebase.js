// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth ,GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeFz254Zxj8riLNYeaLZECyTIen6VO-J8",
  authDomain: "video-550ba.firebaseapp.com",
  projectId: "video-550ba",
  storageBucket: "video-550ba.appspot.com",
  messagingSenderId: "33257736416",
  appId: "1:33257736416:web:af802463c7ff3acab2a885",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
