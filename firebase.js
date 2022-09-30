// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoavdsUA7QEJW_rbogpp8pWykv-YNmCfc",
  authDomain: "nativeconnection-33c6e.firebaseapp.com",
  projectId: "nativeconnection-33c6e",
  storageBucket: "nativeconnection-33c6e.appspot.com",
  messagingSenderId: "633598313630",
  appId: "1:633598313630:web:9c7fe85acd28cdc24be78f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// if(!firebase.app.length){
//     firebase.initializeApp(firebaseConfig);
// }

export { firebase };