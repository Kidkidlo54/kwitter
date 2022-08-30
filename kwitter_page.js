//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("useruser_namename")
    room_name=localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
Name = message_data["name"]
msg = message_data["message"]
like = message_data["like"]
Name_tag="<h4>"+ Name + "<img class='user_tick' src='tick.png'></h4>"
msg_tag="<h4 class='message_h4'>"+msg+"</h4>"
like_tag="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+ "onclick='updatelike(this.id)'>"
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>"
row=Name_tag+msg_tag+like_tag+span_tag
document.getElementById("output").innerHTML+=row 
//End code
      } });  }); }
getData();

function send(){
      msg= document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            msg:msg,
            like:0
            
      });
      document.getElementById("msg").value=""
}
function logout(){
      localStorage.removeItem("useruser_namename")
      localStorage.removeItem("room_name")
      window.location = "index.html"
} 
function updatelike(message_id){
      buttonid=message_id
      likes=document.getElementById(buttonid).value
      updatelikes=Number(likes)+1
      console.log(updatelikes)
      firebase.database().ref(room_name).child(message_id).update({
            like:updatelikes
      })
}