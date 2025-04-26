// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // 👈 Add this
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyChOSLEnxP3EYp7DapmyDEF9unAZV1H1k8",
  authDomain: "login-51483.firebaseapp.com",
  projectId: "login-51483",
  storageBucket: "login-51483.firebasestorage.app", // small typo fixed here too
  messagingSenderId: "660426561898",
  appId: "1:660426561898:web:2e6e162105c5edae0ead13",
  measurementId: "G-0NS5SMS336"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app); // ✅ This line enables Firebase Auth
export const db = getFirestore(app);
