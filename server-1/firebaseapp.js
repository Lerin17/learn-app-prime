const {initializeApp} = require('firebase/app')
const functions = require('firebase-functions')


// const firebase = require('firebase')
// const {firebase} = require('firebase')
import firebase from 'firebase'

const {getFirestore, collection,setDoc, doc} = require('firebase/firestore')
// import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
;
const { getDatabase } = require('firebase-admin/database');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/Wsetup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnqwnkdclt65vFRiX2k9Glzq_ihaZC9EU",
  authDomain: "learn-app-e5f79.firebaseapp.com",
  projectId: "learn-app-e5f79",
  storageBucket: "learn-app-e5f79.appspot.com",
  messagingSenderId: "746868828104",
  appId: "1:746868828104:web:df46f7100bc638203242fd",
  measurementId: "G-0BNMJZVQQ1"
};


const firestoreapp = initializeApp(firebaseConfig)
const db = getFirestore(firestoreapp)

const firebasedbx = firebase.database(firestoreapp)

// const cityRef = doc(db, 'cities', 'BJ');
// setDoc(cityRef, { capital: true }, { merge: true });

// var addMessage = firebase.functions().httpsCallable('addMessage');
// addMessage({text: messageText}).then(function(result) {
//   // Read result of the Cloud Function.
//   var sanitizedMessage = result.data.text;
//   // ...
// });
// const getdata = async (req, res) => {
//    const learndb = getDatabase()
//    const ref = learndb.ref('server/saving-data/fireblog/posts')
// }




const txry = async (req, res) => {
    const userRef = doc(db, 'adminusers', 'TOMX')


 

 try {
   setDoc(userRef, {
        name:'tom',
        age:14
    }, { capital: true }, { merge: true }).then(()=>{
      return userRef
    }).then((snapshot) => {

    })
    res.status(200).json('done')
 } catch (error) {
    res.status(500).json(error)
 }  
}

const getData = async (req, res) => {

}

exports.say  = functions.https.onCall(async (data, context) => {

});


// const User = collection(db, 'users')

module.exports = txry