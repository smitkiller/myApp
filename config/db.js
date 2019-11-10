import firebase from 'firebase';


let config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

let app=firebase.initializeApp(config);
export const db= app.database();
//export const ref = firebase.database().ref();
//export const firebaseAuth = firebase.auth;
