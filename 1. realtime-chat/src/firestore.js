import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyAUMdEb-9sbFa-RXq9IRy6taeWNmXeyyE8",
  authDomain: "superchat-45caa.firebaseapp.com",
  projectId: "superchat-45caa",
  storageBucket: "superchat-45caa.appspot.com",
  messagingSenderId: "906576704753",
  appId: "1:906576704753:web:83074ec6f4d1b82835a550",
  measurementId: "G-GWRGF4W0LP"
})

const firestore = firebase.firestore()

export default firestore