import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBDGIICbfrVRjD6c2F3huDCDy40ZNVpM9Q",
    authDomain: "slack-advanced-workspace.firebaseapp.com",
    projectId: "slack-advanced-workspace",
    storageBucket: "slack-advanced-workspace.appspot.com",
    messagingSenderId: "535789984443",
    appId: "1:535789984443:web:6f94ebb9ebb68826f6e79e",
    measurementId: "G-FLBSKMHF4N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{db,auth,provider};
  export default firebase;