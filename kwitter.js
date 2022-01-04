function addUser(){
    add_user= document.getElementById("UserName").value;
    localStorage.setItem("UserName", add_user);
    window.location= "kwitter_room.html";
}