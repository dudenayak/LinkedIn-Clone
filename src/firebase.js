import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDSqfCwVIJMRB_Uu_CXmpGRgVM3bLuGWzU',
  authDomain: 'linkedin-clone-35d4e.firebaseapp.com',
  projectId: 'linkedin-clone-35d4e',
  storageBucket: 'linkedin-clone-35d4e.appspot.com',
  messagingSenderId: '1048219372061',
  appId: '1:1048219372061:web:14b737bc01a7df89fa14f4',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
