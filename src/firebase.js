import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDXwvNEeqU8VREn7rvQAcyJ_nKcEQDahaw",
    authDomain: "comments-a3541.firebaseapp.com",
    databaseURL: "https://comments-a3541.firebaseio.com",
    projectId: "comments-a3541",
    storageBucket: "",
    messagingSenderId: "993912250519",
    appId: "1:993912250519:web:8df2d7725c6e901d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const database = firebase.database()
export const auth = firebase.auth()