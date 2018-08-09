const nameInput = '';
var emaiInput = '';
var passwordInput = '';
// above are empty variables whatever the user types will be put into the variable 
// 
var usersObject = {
      

};
/*global localStorage*/
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

/*global placeholder*/
if (placeholder === null ){
    alert("You must fill out all every feild.");
    
}else {
    
}