import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
    apiKey: "AIzaSyDJOIv7J7vBu7wwN1Xkm2YAeyxC1JTg8OI",
    authDomain: "auth-7da2f.firebaseapp.com",
    projectId: "auth-7da2f",
    storageBucket: "auth-7da2f.appspot.com",
    messagingSenderId: "704102715126",
    appId: "1:704102715126:web:0181f95693b7ce91f1a6d7"
};

const devConfig = {
  apiKey: "AIzaSyDJOIv7J7vBu7wwN1Xkm2YAeyxC1JTg8OI",
  authDomain: "auth-7da2f.firebaseapp.com",
  projectId: "auth-7da2f",
  storageBucket: "auth-7da2f.appspot.com",
  messagingSenderId: "704102715126",
  appId: "1:704102715126:web:0181f95693b7ce91f1a6d7"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
