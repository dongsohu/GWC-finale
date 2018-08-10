var nameInput = document.getelementbyID("usernameInsert").value;
var emaiInput = document.getelementbyID("emailInsert").value;
var passwordInput = document.getelementID("usersPswrd").value;
// above are empty variables whatever the user types will be put into the variable 
var usersObject = {
      

};
/*global localStorage*/
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("username", "");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("username");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

/*global placeholder*/
if (placeholder === null ){
    alert("You must fill out all every feild.");
    
}else (){
    
}

function signupFunct {
    
    
}
