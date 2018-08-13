var nameInput = document.getelementbyID("usernameInsert").value;
var emailInput = document.getelementbyID("emailInsert").value;
var passwordInput = document.getelementID("usersPswrd").value;
var passwordInput2 = document.getelementID("usersPswrd2").value;
// above are empty variables whatever the user types will be put into the variable 
var usersObject = {
        password :"" ,
        email: "",
        grades : "",
        priorityList : ""
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
    
}else{
    
}
var newUser= new usersObject()
newUser.password = passwordInput
newUser.email = emailInput
function signupFunct(newUser, userInput) {
    localStorage.setItem(newUser,userInput);
}
function filledOut(userName, userEmail, userPswrd, userPswrd2){
        var a = document.forms["signUp"]["createUserName"].value
        var b = document.forms["signUp"]["createEmail"].value
        var c = document.forms["signUp"]["createPswrd"].value
        var d = document.forms["signUp"]["createPswrd2"].value
        var allFilled = false
        if (a == ""){
            allFilled = true;
        }
        if (b == ""){
            allFilled = true;
        }
        if (c == ""){
            allFilled = true;
        }
        if (d == ""){
            allFilled = true;
        }
        if (c == d){
            allFilled = true;
        }
        
        return allFilled;
}
var signUpResult = allFilled(nameInput, emailInput, passwordInput, passwordInput2);

if (input != null){
//  if you've filled out all inputs correctly and the button is clicked then can you go to the next page

    
}

$("").click(function(){
    
});