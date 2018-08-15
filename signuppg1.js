function Inputs(){
var nameInput = document.getElementbyID("usernameInsert").value;
var emailInput = document.getElementbyID("emailInsert").value;
var passwordInput = document.getElementbyID("usersPswrd").value;
var passwordInput2 = document.getElementbyID("usersPswrd2").value;
// above are empty variables whatever the user types will be put into the variable 
var usersObject = {
    password :"" ,
    email: "",
    grades : "",
    priorityList : ""
};
}
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
/*global usersObject */
var newUser= new usersObject();
/*global passwordInput*/
newUser.password = passwordInput;
/*global emailInput*/
newUser.email = emailInput;
function signupFunct(newUse, userInput) {
    localStorage.setItem(newUse,userInput);
}
/*
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

var signUpResult = filledOut(nameInput, emailInput, passwordInput, passwordInput2);
/*global*/
/*
if (input != null){
$("document").ready(function(){
    $("#signupsNextbutton").click(function(){
    e.preventDefault();
        $('#dictionary').load('sign2.html');
        
    });
    
/*
//login functions//
var e = document.forms["loginForm"]["nameEmail"].value
/*
var f = document.forms["loginForm"]["logPSWRD"].value
function logIN(UserName, UserPswrd){
    
    if (localStorage.getItem(UserName)== null){
       alert("No username found!");
   }    
        if(localStorage.getItem(UserName).password  == UserPswrd){
        $("document").ready(function(){
            $("#enterBut").click(function(){
                e.preventDefault();
                $('#dictionary').load('basicpg.html');
     }  else if(localStorage.getItem(UserName).password  != UserPswrd){
    alert("Wrong Password or Username.");
   }
  }
 }
}
*/
function checkInput(){
    /*global $*/
    var isValid = true;
    $('input').filter("[required]").each(function(){
        if($(this).val() === ''){
            $("#next1").prop('disabled', true);
            isValid = false;
            return false;
        }
        });
        if(isValid) {$("#next1").prop('disabled', false)}
        return isValid;
        
/*  this code is unreachable, needs to be fixed
    $("next1").click(function(){
        alert(checkInput());
    });
}

$("input").filter('[required]').on('keyup',function(){
  checkInput();
});

checkInput();
*/