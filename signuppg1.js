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
    alert("You must fill out all every field.");
    
}else{
    
}
var newUser= new usersObject()
newUser.password = passwordInput;
newUser.email = emailInput;
function signupFunct(newUse, userInput) {
    localStorage.setItem(newUse,userInput);
}

/*function filledOut(userName, userEmail, userPswrd, userPswrd2){
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
*/
var signUpResult = filledOut(nameInput, emailInput, passwordInput, passwordInput2);
/*global*/
if (input != null){
$("document").ready(function(){
    $("#signupsNextbutton").click(function(){
        e.preventDefault();
        $('#dictionary').load('sign2.html');
        
    });

/*
//login functions//
var e = document.forms["loginForm"]["nameEmail"].value
var f = document.forms["loginForm"]["logPSWRD"].value
function logIN(UserName, UserPswrd){
    if (localStorage.getItem(UserName)== null){
       alert("No username found!");
   } if(localStorage.getItem(UserName).password  == UserPswrd){
        $("document").ready(function(){
            $("#enterBut").click(function(){
                e.preventDefault();
                $('#dictionary').load('basicpg.html');
   }else{
    alert("Wrong Password or Username.");
   }
*/