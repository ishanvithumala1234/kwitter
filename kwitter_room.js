// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCV-DfP1mgUyT6y3Nc8qZHOVA-euytR77s",
      authDomain: "kwitter-app-76f4b.firebaseapp.com",
      databaseURL: "https://kwitter-app-76f4b-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-76f4b",
      storageBucket: "kwitter-app-76f4b.appspot.com",
      messagingSenderId: "50945183262",
      appId: "1:50945183262:web:5f85dc679d00e648c1a80f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html"
    }

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(" Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name) 
{
      console.log(name);
localStorage.setItem("roomname", room_name);
window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}