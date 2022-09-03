// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAngVFKgcpl5JcVI0KrgHyj1f7CB4XWXvA",
  authDomain: "deakin-web-app-c092e.firebaseapp.com",
  projectId: "deakin-web-app-c092e",
  storageBucket: "deakin-web-app-c092e.appspot.com",
  messagingSenderId: "443879962742",
  appId: "1:443879962742:web:0f4df78707bdd7c1adc757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app