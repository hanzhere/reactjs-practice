import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsrL0sORrBeKpszxg61yfnK-xr4cPjdP0",
    authDomain: "clone-d3ea6.firebaseapp.com",
    databaseURL: "https://clone-d3ea6.firebaseio.com",
    projectId: "clone-d3ea6",
    storageBucket: "clone-d3ea6.appspot.com",
    messagingSenderId: "101409900423",
    appId: "1:101409900423:web:f8cd932afacdaea8d7f522",
    measurementId: "G-9JCM0L6V5N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }