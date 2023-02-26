// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyAqgUpCLdqaAIUjM43ZeBrbjh0JdRpz_h8',
  authDomain: 'cloudsecuritychecklist.firebaseapp.com',
  projectId: 'cloudsecuritychecklist',
  storageBucket: 'cloudsecuritychecklist.appspot.com',
  messagingSenderId: '721247272117',
  appId: '1:721247272117:web:c6c5f12769f50f0c9912fc',
  measurementId: 'G-HD9PSR57RR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const firestore = getFirestore(app);
