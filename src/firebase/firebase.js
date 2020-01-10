import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAvhPs1x56tXUTI39DFJqbvO5zXXOLhC9M",
    authDomain: "quiz-c24e4.firebaseapp.com",
    databaseURL: "https://quiz-c24e4.firebaseio.com",
    projectId: "quiz-c24e4",
    storageBucket: "quiz-c24e4.appspot.com",
    messagingSenderId: "1061419858594",
    appId: "1:1061419858594:web:ee34bc8c8cbbe9730db5fb",
    measurementId: "G-64H5YF2H4Q"
  };

const firebaseConf = firebase.initializeApp(config);


export default firebaseConf;