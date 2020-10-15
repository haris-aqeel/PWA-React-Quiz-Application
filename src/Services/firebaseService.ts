import firebase from "firebase";
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
const messaging = firebase.messaging();


export function firebaseConfiguration() {
    
    Notification.requestPermission().then((permission) => {
        console.log(permission);
        if (permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log(currentToken)
                } else {
                  // Show permission request.
                  console.log('No Instance ID token available. Request permission to generate one.');
                  // Show permission UI.
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
              
        }

    })
}