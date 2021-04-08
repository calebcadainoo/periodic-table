import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7TqXcRHyFIy7dsnoM_qbuR498ra2fymk",
  authDomain: "webperiodictable.firebaseapp.com",
  projectId: "webperiodictable",
  storageBucket: "webperiodictable.appspot.com",
  messagingSenderId: "447069502853",
  appId: "1:447069502853:web:546e38baa51eb77ce098ec",
  measurementId: "G-G2M9S98EE3"
};

firebase.initializeApp(firebaseConfig)
const analytics = firebase.analytics()

export { analytics }

