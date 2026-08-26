import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_ZT6ZreB_CqJNtPpKc7sm8kMJDpidN5Y",
  authDomain: "nitrpyqcounter.firebaseapp.com",
  projectId: "nitrpyqcounter",
  storageBucket: "nitrpyqcounter.firebasestorage.app",
  messagingSenderId: "494606720535",
  appId: "1:494606720535:web:e951a654e998f9a1b20652"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);