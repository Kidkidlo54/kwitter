
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDomduMJL0oGOtTQndU0nH3Kt1TqorYnYA",
    authDomain: "fir-come.firebaseapp.com",
    databaseURL: "https://fir-come-default-rtdb.firebaseio.com",
    projectId: "fir-come",
    storageBucket: "fir-come.appspot.com",
    messagingSenderId: "803719410755",
    appId: "1:803719410755:web:6f20ec3847459df420d0f6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      eight=document.getElementById("pizza").value
      localStorage.setItem("Username",eight )
      firebase.database().ref("/").child(eight).update({purpose: "adding user"})
  }
  