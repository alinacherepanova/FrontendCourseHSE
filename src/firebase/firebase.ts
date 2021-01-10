import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBOOhjDdDoJzpKicMKCW3GP-hUHSQlYM2M",
    authDomain: "helpcenter-alina.firebaseapp.com",
    projectId: "helpcenter-alina",
    storageBucket: "helpcenter-alina.appspot.com",
    messagingSenderId: "365607444",
    appId: "1:365607444:web:abdf129226cb8d7a180501",
    measurementId: "G-JZ2N2HTMZ1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();