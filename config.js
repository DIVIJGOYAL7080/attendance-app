import firebase from 'firebase';
require('@firebase/firestore');


var firebaseConfig = {
  apiKey: "AIzaSyBn_Ff-IbPhgo0obeflVRTiOsAwBP7idR8",
  authDomain: "attendance-97833.firebaseapp.com",
  databaseURL: "https://attendance-97833-default-rtdb.firebaseio.com",
  projectId: "attendance-97833",
  storageBucket: "attendance-97833.appspot.com",
  messagingSenderId: "1062350238402",
  appId: "1:1062350238402:web:04194a3f6a2ba2d2b3415b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
