import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDd9vrfa6gTPbXnBk2FXk0ZmBnCU04sNBg",
    authDomain: "restaurante-2f964.firebaseapp.com",
    projectId: "restaurante-2f964",
    storageBucket: "restaurante-2f964.appspot.com",
    messagingSenderId: "738814061070",
    appId: "1:738814061070:web:775e054d335231d0182a5f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
