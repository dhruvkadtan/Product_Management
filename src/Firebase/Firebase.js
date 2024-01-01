import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCcaDL8_6N66f6IZcDtySNn7THYUkNBxfE",
  authDomain: "fir-authentication-778de.firebaseapp.com",
  projectId: "fir-authentication-778de",
  storageBucket: "fir-authentication-778de.appspot.com",
  messagingSenderId: "67987263150",
  appId: "1:67987263150:web:75c910e15325533820273f",
  measurementId: "G-XVK17QJL6M",
});

export const auth = app.auth();
export default app;
