
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDrI3H5EX112BA6AL_gRWM5iTXsWW5qiuU",
    authDomain: "finalreact-67154.firebaseapp.com",
    projectId: "finalreact-67154",
    storageBucket: "finalreact-67154.firebasestorage.app",
    messagingSenderId: "193616652117",
    appId: "1:193616652117:web:0e7fa5b1574399408a71dc"
};


const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app);