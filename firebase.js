// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7rrIWCOESpdtpVNwEmMQaJlaEeNPuGKE",
  authDomain: "shopping-list-9686f.firebaseapp.com",
  projectId: "shopping-list-9686f",
  storageBucket: "shopping-list-9686f.appspot.com",
  messagingSenderId: "448594714930",
  appId: "1:448594714930:web:54408ff25cc7d33522772b",
  measurementId: "G-D7NJMVJCWB",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

// Get the Firestore instance
const db = firebase.firestore();

export { firebase, db };
