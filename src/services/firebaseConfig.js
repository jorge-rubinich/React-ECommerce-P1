// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmuN74wwV-CaERgNYHq4PFB4wLHOfM_aA",
  authDomain: "pruebitanov.firebaseapp.com",
  projectId: "pruebitanov",
  storageBucket: "pruebitanov.appspot.com",
  messagingSenderId: "614945487326",
  appId: "1:614945487326:web:5698dbfc5f60cfa3d1054f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const collectionProd = collection(db, 'productos');
export const collectionCat = collection(db, 'categorias');
export const collectionOrders = collection(db, 'orders');