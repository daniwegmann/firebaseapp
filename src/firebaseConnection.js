import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCxaxCQcRJIJqp78XCm1PUB0dpa1VCGbVA",
    authDomain: "curso-b6840.firebaseapp.com",
    projectId: "curso-b6840",
    storageBucket: "curso-b6840.appspot.com",
    messagingSenderId: "60237362752",
    appId: "1:60237362752:web:080bb4139251c01f8bd1a5",
    measurementId: "G-XH4KMEDT2V"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export { db, auth }