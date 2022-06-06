import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBA4RY6SXhC3cEdZu8xA4ZOGxU3SZgpEk4",
    authDomain: "bordero-app-2bd8e.firebaseapp.com",
    databaseURL: "https://bordero-app-2bd8e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bordero-app-2bd8e",
    storageBucket: "bordero-app-2bd8e.appspot.com",
    messagingSenderId: "786885370395",
    appId: "1:786885370395:web:9dc5743d5ae72bfe75cebe"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };