import { getApp, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "next-ecommerce-394710.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_NAME,
  storageBucket: "next-ecommerce-394710.appspot.com",
  messagingSenderId: "453670213865",
  appId: "1:453670213865:web:c853dd703f73f7b61ff878",
};
// Initialize Firebase
let app;
try{
  app = initializeApp(firebaseConfig);
}catch(err){
  app = getApp()
}

export const storage = getStorage(app);