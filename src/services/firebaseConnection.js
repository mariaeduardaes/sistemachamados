import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyB0m6a7-zBcZKRTIZMijGz8zwXS_Y0_2R4",
  authDomain: "sistemachamados-5433b.firebaseapp.com",
  projectId: "sistemachamados-5433b",
  storageBucket: "sistemachamados-5433b.appspot.com",
  messagingSenderId: "999382869873",
  appId: "1:999382869873:web:31a36e722667dddb78f8d0",
  measurementId: "G-E2D3KETP4X",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
