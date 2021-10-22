import firebase from 'firebase'
import 'firebase/auth'
import  'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA1lOpKie9lb74T0nQ6IGDT-XFHtGFUZwg",
  authDomain: "fir-auth-e9f1d.firebaseapp.com",
  projectId: "fir-auth-e9f1d",
  storageBucket: "fir-auth-e9f1d.appspot.com",
  messagingSenderId: "438568410257",
  appId: "1:438568410257:web:1c230ecf1f65c27f6b3330"
};


const app = firebase.initializeApp(firebaseConfig);


export default app;