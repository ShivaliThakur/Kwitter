var firebaseConfig = {
      apiKey: "AIzaSyBPcIn6ATnCNiWZmAApq7vLhpRTGzFJzvA",
      authDomain: "kwitter-app-697e2.firebaseapp.com",
      databaseURL: "https://kwitter-app-697e2-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-697e2",
      storageBucket: "kwitter-app-697e2.appspot.com",
      messagingSenderId: "745887955150",
      appId: "1:745887955150:web:b1f0687f416b1c9f69f89f"
    };
    firebase.initializeApp(firebaseConfig);


    user_name= localStorage.getItem("UserName");
room_name= localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
msg= message_data['message'];
like= message_data['like'];
name_with_tag= "<h4>"+ name+ "<img src='tick.png' class='user_tick'></h4>";
message_with_tag= "<h4 class= 'message_h4'>" + msg+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id +" value="+ like+ " onclick='updateLike(this.id)'>";
span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'> Likes:" + like + "</span> </button> <hr>";
row= name_with_tag+ message_with_tag+ like_button+ span_with_tag;
document.getElementById("output").innerHTML+= row;

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("UserName");
      window.location= "index.html";
}

function updateLike(message_id){
      console.log("like button with id= " + message_id);
      button_id= message_id;
      likes= document.getElementById(button_id).value;
      updated_likes= Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function send(){
      msg= document.getElementById("message").value;
      console.log(msg);
      document.getElementById("message").value= " ";
      firebase.database().ref(room_name).push({
            message: msg,
            like: 0,
            name: user_name
      });
     
}
