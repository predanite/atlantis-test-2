var firebaseConfig = {
    apiKey: "AIzaSyBcLRsW1537JyZKIe8kHR0hFPJcMq2cduE",
    authDomain: "chitter-ab786.firebaseapp.com",
    databaseURL: "https://chitter-ab786-default-rtdb.firebaseio.com",
    projectId: "chitter-ab786",
    storageBucket: "chitter-ab786.appspot.com",
    messagingSenderId: "1036980614606",
    appId: "1:1036980614606:web:e490deaba4af81d545279f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
