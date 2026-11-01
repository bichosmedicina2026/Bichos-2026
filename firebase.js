import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdmbKiXAyEW3gw9wUg6fd9gIqDWQUlKiU",
  authDomain: "bichos-2026-db4ea.firebaseapp.com",
  databaseURL: "https://bichos-2026-db4ea-default-rtdb.firebaseio.com",
  projectId: "bichos-2026-db4ea",
  storageBucket: "bichos-2026-db4ea.firebasestorage.app",
  messagingSenderId: "546667193578",
  appId: "1:546667193578:web:e8ef70f63a663c2a77a393"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
