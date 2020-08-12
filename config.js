import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDp-j0VKsEhVFTuTAaotIImCZbS5MMLeGc",
    authDomain: "dauntlessfooddelivery.firebaseapp.com",
    databaseURL: "https://dauntlessfooddelivery.firebaseio.com",
    projectId: "dauntlessfooddelivery",
    storageBucket: "dauntlessfooddelivery.appspot.com",
    messagingSenderId: "676727946698",
    appId: "1:676727946698:web:ed0d731357a3021944e333"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();