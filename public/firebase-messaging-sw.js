importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDMsvf7O33Qxw5ni65ASXzsaIQBCpv4n1g",
    authDomain: "pwa-quiz-application.firebaseapp.com",
    databaseURL: "https://pwa-quiz-application.firebaseio.com",
    projectId: "pwa-quiz-application",
    storageBucket: "pwa-quiz-application.appspot.com",
    messagingSenderId: "161679008624",
    appId: "1:161679008624:web:0874aac305444a66e465b5"
  };

firebase.initializeApp(firebaseConfig);
firebase.messaging();