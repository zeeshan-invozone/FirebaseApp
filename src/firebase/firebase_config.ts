import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAtFPwPxGhyKFZt03DycmrVxK2FpfiJvYM',
  authDomain: 'user-registration-6b9cd.firebaseapp.com',
  projectId: 'user-registration-6b9cd',
  storageBucket: 'user-registration-6b9cd.appspot.com',
  messagingSenderId: '421055995628',
  appId: '1:421055995628:web:c8b5dbaa07c59536bc0fc9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
