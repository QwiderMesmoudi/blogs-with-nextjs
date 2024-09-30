

import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyADKdN8ZLWn3rmN3Rwt1ZjBE63_DjY5Qng",
  
    authDomain: "blogs-ceb99.firebaseapp.com",
  
    projectId: "blogs-ceb99",
  
    storageBucket: "blogs-ceb99.appspot.com",
  
    messagingSenderId: "1024357569462",
  
    appId: "1:1024357569462:web:524905e55be555bd912717",
  
    measurementId: "G-5T52LSXNDV"
  
  };
  
  const app = !getApps().length ? initializeApp(firebaseConfig):getApp()
  const db=getFirestore(app)
  const storage=getStorage()

  export {db,storage}