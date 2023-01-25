// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0GZVC0Q0_P3lbEdpWBaNvAiZydvEMxCI',
  authDomain: 'netflix-react-17129.firebaseapp.com',
  projectId: 'netflix-react-17129',
  storageBucket:  'netflix-react-17129.appspot.com',
  messagingSenderId: '132633522486',
  appId:  '1:132633522486:web:6b8b83255f609122650397',
  
};

// REACT_APP_FIREBASE_API_KEY = 'AIzaSyD0GZVC0Q0_P3lbEdpWBaNvAiZydvEMxCI';
// REACT_APP_FIREBASE_AUTH_DOMAIN='netflix-react-17129.firebaseapp.com';
// REACT_APP_FIREBASE_PROJECT_ID = 'netflix-react-17129';
// REACT_APP_FIREBASE_STOARGE_BUCKET= 'netflix-react-17129.appspot.com';
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID='132633522486';
// REACT_APP_ID = '1:132633522486:web:6b8b83255f609122650397';



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);