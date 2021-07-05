import firebase from 'firebase/app'
import config from '../firebaseConfig.json'
import 'firebase/firestore'

firebase.initializeApp(config)

const firestore = firebase.firestore()

export default firestore