import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyANaM5QXG2N1aFDWlDZdRKep4YWHFb3xps",
    authDomain: "awesomeproject-2b852.firebaseapp.com",
    projectId: "awesomeproject-2b852",
    storageBucket: "awesomeproject-2b852.appspot.com",
    messagingSenderId: "309565828878",
    appId: "1:309565828878:web:3aecc43a7416e60784f15f",
    databaseURL: 'https://awesomeproject-2b852-default-rtdb.firebaseio.com',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)