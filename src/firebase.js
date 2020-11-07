import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCH-iqqvaSjyd0Lh8tUF6-2HGkYFwpebdA",
  authDomain: "my-twitter-92680.firebaseapp.com",
  databaseURL: "https://my-twitter-92680.firebaseio.com",
  projectId: "my-twitter-92680",
  storageBucket: "my-twitter-92680.appspot.com",
  messagingSenderId: "548550181813",
  appId: "1:548550181813:web:bc6ad2e8656a01b8594ffc",
  measurementId: "G-B6C8B06CKM",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
