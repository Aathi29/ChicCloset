import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyCxRIX4TZJBGsO3VIjelJlQOVw2w_vGL0k",
  authDomain: "chiccloset-5921.firebaseapp.com",
  projectId: "chiccloset-5921",
  storageBucket: "chiccloset-5921.appspot.com",
  messagingSenderId: "635894457071",
  appId: "1:635894457071:web:80d989d7d5802ad72cb11a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize individual Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
