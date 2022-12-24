import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCs6csCmwWxav5FXD2ix0eZ8_KkUNnQ7xg",
    authDomain: "twitter-clone-28859.firebaseapp.com",
    projectId: "twitter-clone-28859",
    storageBucket: "twitter-clone-28859.appspot.com",
    messagingSenderId: "1066243880557",
    appId: "1:1066243880557:web:0f8cbdaef4018cda6ef164",
    measurementId: "G-HJCWJPM4XZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db