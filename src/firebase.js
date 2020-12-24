import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD31eozukKAJp5PBb7ArdgDbgqwV8S1NqI',
  authDomain: 'linkedin-clone-660ec.firebaseapp.com',
  projectId: 'linkedin-clone-660ec',
  storageBucket: 'linkedin-clone-660ec.appspot.com',
  messagingSenderId: '1065365543313',
  appId: '1:1065365543313:web:442ce1c20fc2e2bcc3a230',
  measurementId: 'G-VFSSBEH8HM',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
