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
//ADD YOUR FIREBASE LINKS HERE
console.log("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
useruser_namename = localStorage.getItem("useruser_namename")
document.getElementById("user_name").innerHTML = "Welcome" + useruser_namename
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name" + Room_names)
                  row = "<div class='room_name'id=" + Room_names + "onclick='redarecttoRoomname(this.id)'>#" + Room_names + "</div><hr></hr>"
                  document.getElementById("output").innerHTML += row


                  //End code
            });
      });
}
getData();
function addroom() {
      room = document.getElementById("Rome").value
      firebase.database().ref("/").child(room).update({
            porpose: "adding Room Name"
      })
      localStorage.setItem("room_name", room)
      window.location = "kwitter_page.html"
}
function redarecttoRoomname(Name) {
      console.log(Name)
      localStorage.setItem("room_name", Name)
      window.location = "kwitter_page.html"
}
function logout() {
      localStorage.removeItem("useruser_namename")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}