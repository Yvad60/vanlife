import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDwhh9b0ilxmKEPvYHBKkShCBjEy7QM2aU",
  authDomain: "vanlife-ce58c.firebaseapp.com",
  projectId: "vanlife-ce58c",
  storageBucket: "vanlife-ce58c.appspot.com",
  messagingSenderId: "480354039922",
  appId: "1:480354039922:web:ba4d0aba629cecffa3eaeb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const vansCollectionRef = collection(db, "vans");
