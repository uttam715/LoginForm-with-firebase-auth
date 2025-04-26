// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChOSLEnxP3EYp7DapmyDEF9unAZV1H1k8",
  authDomain: "login-51483.firebaseapp.com",
  projectId: "login-51483",
  storageBucket: "login-51483.firebasestorage.app",
  messagingSenderId: "660426561898",
  appId: "1:660426561898:web:2e6e162105c5edae0ead13",
  measurementId: "G-0NS5SMS336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);