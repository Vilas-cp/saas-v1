import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDRcVXoqhimFBgJvton6XIRCtCcKvKLKk",
  authDomain: "chat-with-pdf-e4aa7.firebaseapp.com",
  projectId: "chat-with-pdf-e4aa7",
  storageBucket: "chat-with-pdf-e4aa7.appspot.com",
  messagingSenderId: "767289380837",
  appId: "1:767289380837:web:3819fd6dedeaec83d9a90c",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
