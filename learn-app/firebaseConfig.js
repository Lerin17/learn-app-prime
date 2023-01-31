import {initializeApp} from 'firebase/app'

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


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

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);