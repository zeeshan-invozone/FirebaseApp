import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAHZy6glYrFqJTpcfeRB7CKbN5_E7fMkpE",
    authDomain: "userprofile-63703.firebaseapp.com",
    projectId: "userprofile-63703",
    storageBucket: "userprofile-63703.appspot.com",
    messagingSenderId: "301686999344",
    appId: "1:301686999344:web:aa433a22ced9df8caf60f5"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
