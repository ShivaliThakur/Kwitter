
var firebaseConfig = {
      apiKey: "AIzaSyBPcIn6ATnCNiWZmAApq7vLhpRTGzFJzvA",
      authDomain: "kwitter-app-697e2.firebaseapp.com",
      databaseURL: "https://kwitter-app-697e2-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-697e2",
      storageBucket: "kwitter-app-697e2.appspot.com",
      messagingSenderId: "745887955150",
      appId: "1:745887955150:web:b1f0687f416b1c9f69f89f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("UserName");
document.getElementById("welcomeTag").innerHTML="Welcome "+ user_name +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room_name=" + Room_names);
      row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom(){
room_name= document.getElementById("roomName").value;
localStorage.setItem("room_name", room_name);
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});

window.location= "kwitter_page.html"; 
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("UserName");
      window.location= "index.html";
}
