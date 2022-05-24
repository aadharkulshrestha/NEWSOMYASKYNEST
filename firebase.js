import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm4mbX6dCLeLRayAM_jytUBNwfW0Swc04",
  authDomain: "newnest-13d08.firebaseapp.com",
  projectId: "newnest-13d08",
  storageBucket: "newnest-13d08.appspot.com",
  messagingSenderId: "537794316018",
  appId: "1:537794316018:web:9c065db1e63edb9131f26b"
};

// Initialize Firebase 
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };