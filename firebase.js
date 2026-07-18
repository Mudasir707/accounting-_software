
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOQx6wMeSQ4IJQdg0Ex1LZOfJaNgdV28Q",
  authDomain: "sheen-accounts.firebaseapp.com",
  projectId: "sheen-accounts",
  storageBucket: "sheen-accounts.firebasestorage.app",
  messagingSenderId: "674397953304",
  appId: "1:674397953304:web:cbf1292d1d56091101126d",
  measurementId: "G-1PQS5V7NLY"
};

export const app = initializeApp(firebaseConfig);

console.log("Firebase Connected Successfully!");
