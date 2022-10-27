// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

/* const firebaseConfig = {
    apiKey: "AIzaSyDtVb82C2UaIlQ165CCeUMO66WUX3uI9ck",
    authDomain: "skill-up-a0055.firebaseapp.com",
    projectId: "skill-up-a0055",
    storageBucket: "skill-up-a0055.appspot.com",
    messagingSenderId: "689011117148",
    appId: "1:689011117148:web:e678bbaac28795279c6a99"
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;