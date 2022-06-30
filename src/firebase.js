import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDlCdJ-so8zY-leBrVIE2Hesv39ECMJrbA",
  authDomain: "chat-doc-fb08c.firebaseapp.com",
  projectId: "chat-doc-fb08c",
  storageBucket: "chat-doc-fb08c.appspot.com",
  messagingSenderId: "328056460995",
  appId: "1:328056460995:web:f5dce05b34c6bfbb69b476",
  measurementId: "G-NZ9SF3PTE0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;