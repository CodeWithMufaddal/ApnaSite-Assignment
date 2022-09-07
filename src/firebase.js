// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
   apiKey: "AIzaSyC6KnvaScc-vOx2Tqn4p8k6cZN0a75ES8Q",
   authDomain: "apnasite-assignment.firebaseapp.com",
   projectId: "apnasite-assignment",
   storageBucket: "apnasite-assignment.appspot.com",
   messagingSenderId: "852466956304",
   appId: "1:852466956304:web:bd0a0cf22022fcdff17295",
   measurementId: "G-668FYNH06Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);