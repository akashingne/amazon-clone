import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDnmtehG2qs-ogEN9tbgSufdbrnSvk40p4",
  authDomain: "clone-2e6ef.firebaseapp.com",
  databaseURL: "https://clone-2e6ef.firebaseio.com",
  projectId: "clone-2e6ef",
  storageBucket: "clone-2e6ef.appspot.com",
  messagingSenderId: "613343425830",
  appId: "1:613343425830:web:72d584ea8158d82b5ffde7",
  measurementId: "G-DYR5B9QPSW",
});

const auth = firebase.auth();

export { auth };
