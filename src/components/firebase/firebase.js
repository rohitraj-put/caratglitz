import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAZlHK2kBBbh0VlnHr7Qlu6_f3K-SB9Ea0",
    authDomain: "caratglitz-54208.firebaseapp.com",
    projectId: "caratglitz-54208",
    storageBucket: "caratglitz-54208.appspot.com",
    messagingSenderId: "105314552310",
    appId: "1:105314552310:web:dcce4dcc4cdcd8dd6d5fd7",
    measurementId: "G-0S15Q7M14B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
