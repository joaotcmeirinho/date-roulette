import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXBN1YOKqCvZ1R7xk-yTuvtoMPSuXLHAI",
  authDomain: "date-roulette-4ff67.firebaseapp.com",
  projectId: "date-roulette-4ff67",
  storageBucket: "date-roulette-4ff67.appspot.com",
  messagingSenderId: "107492569924",
  appId: "1:107492569924:web:4f4ab916e31127c8cadd11",
  measurementId: "G-63VZKEDTBH",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
