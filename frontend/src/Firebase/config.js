import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAagmJCqShyEsv-esNz_DiJOKeGW5bvGCQ",
    authDomain: "fir-22b78.firebaseapp.com",
    projectId: "fir-22b78",
    storageBucket: "fir-22b78.appspot.com",
    messagingSenderId: "836233874985",
    appId: "1:836233874985:web:6be8cfa6d8e24f16c85638",
    measurementId: "G-8S0EXDQCEM"
  };

  export default firebase.initializeApp(firebaseConfig)
  