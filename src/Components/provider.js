import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgH6HyIssOL8cacR2zwerfb-nhJVwfMjI",
    authDomain: "burguer-queen-483b6.firebaseapp.com",
    databaseURL: "https://burguer-queen-483b6.firebaseio.com",
    projectId: "burguer-queen-483b6",
    storageBucket: "burguer-queen-483b6.appspot.com",
    messagingSenderId: "806694603566"
  };
  firebase.initializeApp(config);

  export const database=firebase.database()
