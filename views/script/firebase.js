// For Firebase JS SDK v7.20.0 and later, measurementId is optional
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: "ecell-sstc",
    storageBucket: process.env.STORAGE_BUC,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };