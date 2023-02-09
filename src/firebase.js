// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCyLnuLbqVLi8od1fdfZzzxHyvCeKHYfs",
    authDomain: "todo-ninja-39be6.firebaseapp.com",
    projectId: "todo-ninja-39be6",
    storageBucket: "todo-ninja-39be6.appspot.com",
    messagingSenderId: "853663522930",
    appId: "1:853663522930:web:258d10501d515b72aba2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// db.settings({ timestampsInSnapshots: true });

export default db;