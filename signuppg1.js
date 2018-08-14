function userInput(){

var nameInput = document.getElementById("signUp").elements[0].value;
var emailInput = document.getElementById("signUp").elements[1].value;
var passwordInput = document.getElementById("signUp").elements[2].value;
var passwordInput2 = document.getElementById("signUp").elements[3].value;
// above are empty variables whatever the user types will be put into the variable
}

//var usersObject = {
    //password :"" ,
    //email: "",
    //grades : "",
    //priorityList : ""
//};

/*global localStorage*/
debugger;
localStorage.setItem("user", nameInput);
localStorage.setItem("pass", 'TEST') ;
localStorage.setItem("email", []);
//localStorage.setItem("grades", []);
//localStorage.setItem("list", []);

function AppendtoStorage(name,data){
    //debugger;
    var old = localStorage.getItem(name).split('');    old.push(data);

    localStorage.setItem(name,old);
}   
function newList(name, pass, email){
     AppendtoStorage("user", name);
     AppendtoStorage("pass", pass);
     AppendtoStorage("email", email);
 }
 
newList(nameInput,passwordInput, emailInput);


/*global*/
/*
if (input != null){
$("document").ready(function(){
    $("#signupsNextbutton").click(function(){
    e.preventDefault();
        $('#dictionary').load('sign2.html');
        
    });
*/    
/*/login functions//
/var e = document.getElementById("user-name").value;
var f = document.getElementById("user-pswrds").value;

function logIN(UserName, UserPswrd){
    var USER= JSON.parse(localStorage.getItem(UserName));
    if (USER== null){
        alert("No username found!");
        $("#enterBut").prop('disabled', true);
    }    
    if(USER.password  == UserPswrd){
        $("#enterBut").prop('disabled', false);  
    }  
    else if(USER.password  != UserPswrd){
        alert("Wrong Password or Username.");
        $("#enterBut").prop('disabled', true);
   }
}
logIN(e,f);*/

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

//alert(localStorage.getItem("dong"));