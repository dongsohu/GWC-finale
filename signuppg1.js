var nameInput = document.getElementById("usernameInsert").value;
var emailInput = document.getElementById("emailInsert").value;
var passwordInput = document.getElementById("usersPswrd").value;
var passwordInput2 = document.getElementById("usersPswrd2").value;
// above are empty variables whatever the user types will be put into the variable 
var usersObject = {
    password :"" ,
    email: "",
    grades : "",
    priorityList : ""
};

/*global localStorage*/
/*
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("username", "");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("username");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
*/


var newUser= new usersObject();
newUser.password = passwordInput;
newUser.email = emailInput;
function signupFunct(newUse, userInput) {
    localStorage.setItem("test",userInput);
}
signupFunct(nameInput,newUser);
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
*/    

//login functions//
var e = document.forms["loginForm"]["nameEmail"].value
var f = document.forms["loginForm"]["logPSWRD"].value

function logIN(UserName, UserPswrd){
    
    if (localStorage.getItem(UserName)== null){
       alert("No username found!");
       $("#enterBut").prop('disabled', true);
   }    
    if(localStorage.getItem(UserName).password  == UserPswrd){
      }  
     else if(localStorage.getItem(UserName).password  != UserPswrd){
    alert("Wrong Password or Username.");
    $("#enterBut").prop('disabled', true);
   }
}

function checkInput(){
    var isValid = true;
    /*global $*/
    $('input').filter("[required]").each(function(){
        if($(this).val() === ''){
            $("#next1").prop('disabled', true);
            isValid = false;
            return false;
        }
        else{
             $("#next1").prop('disabled', false);
        }
    });
    if(isValid) {$("#next1").prop('disabled', false)}
    return isValid;
}

$("#next1").click(function(){
    alert(checkInput());
});


$("input").filter('[required]').on('keyup',function(){
  checkInput();  
});
checkInput();

alert(localStorage.getItem("dong"));