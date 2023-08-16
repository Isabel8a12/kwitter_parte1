const firebaseConfig = {
    apiKey: "AIzaSyDLCq96KxfkzPRmpvOKA8GMuBCbvPvT0Os",
    authDomain: "kwitter-f00a8.firebaseapp.com",
    projectId: "kwitter-f00a8",
    storageBucket: "kwitter-f00a8.appspot.com",
    messagingSenderId: "214221504191",
    appId: "1:214221504191:web:de7ff32c46d8968052100a",
    databaseURL: "https://kwitter-f00a8-default-rtdb.firebaseio.com"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //AÑADE LOS ENLACES FIREBASE
  
  //AÑADE TUS ENLACES DE FIREBASE
  // Your web app's Firebase configuration
  
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
  //C95
  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"añadir_sala"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
  
  function getData() { 
  firebase.database().ref("/").on("value",function(snapshot){document.getElementById("output").innerHTML="";
  snapshot.forEach(function(childSnapshot){childKey=childSnapshot.key;
  room_names=childKey;
  fila="<div class='room_name'id="+room_name+"onclik='redirectToRoomName(this.id)'>"+room_name+"</div><hr>";
  document.getElementById("output").innerHTML+=fila;
  });
   
      
  });
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
   localStorage.setItem("room_name",name);
   window.location="kwitter_page.html";
  }
  
  
  
  
  //
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  