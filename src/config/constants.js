import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBbHsj26deVQWmxiNT7u-aR196qRNEIAzo",
    authDomain: "kloppend-51e15.firebaseapp.com",
    databaseURL: "https://kloppend-51e15.firebaseio.com"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth