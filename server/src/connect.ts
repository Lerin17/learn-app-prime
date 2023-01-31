// const app = require('express')()
// const server = require('http').createServer(app)

// const cors = require('cors')
// // cosnt io = 
import { initializeApp } from 'firebase/app';

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

    apiKey: "AIzaSyAnqwnkdclt65vFRiX2k9Glzq_ihaZC9EU",
  
    authDomain: "learn-app-e5f79.firebaseapp.com",
  
    projectId: "learn-app-e5f79",
  
    storageBucket: "learn-app-e5f79.appspot.com",
  
    messagingSenderId: "746868828104",
  
    appId: "1:746868828104:web:df46f7100bc638203242fd",
  
    measurementId: "G-0BNMJZVQQ1"
  
  };

  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app);

  


console.log('dd')