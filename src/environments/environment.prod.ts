require('dotenv').config();
export const environment = {
  production: true,
  firebase : {
    apiKey: process.env.API_KEY,
    authDomain: "photos-d991e.firebaseapp.com",
    databaseURL: "https://photos-d991e.firebaseio.com",
    projectId: "photos-d991e",
    storageBucket: "photos-d991e.appspot.com",
    messagingSenderId: "444162937382",
    appId: "1:444162937382:web:ac5addce949b0e8a558ce7",
    measurementId: "G-H92DHWFE66"
  }
};
