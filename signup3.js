function readInputs(){
    var gradesinput1 = document.getElementById("signUp2").elements.namedItem("grade1").value;
    var gradesinput2 = document.getElementById("signUp2").elements.namedItem("grade2").value;
    var gradesinput3 = document.getElementById("signUp2").elements.namedItem("grade3").value;
    var gradesinput4 = document.getElementById("signUp2").elements.namedItem("grade4").value;
    var gradesinput5 = document.getElementById("signUp2").elements.namedItem("grade5").value;
    var gradesinput6 = document.getElementById("signUp2").elements.namedItem("grade6").value;
    var gradesinput7 = document.getElementById("signUp2").elements.namedItem("grade7").value;
    var grades = [
        gradesinput1,
        gradesinput2, 
        gradesinput3, 
        gradesinput4, 
        gradesinput5, 
        gradesinput6, 
        gradesinput7
    ];
    
    var priorityListInput1 = document.getElementById("signUp2").elements.namedItem("list1").value;
    var priorityListInput2 = document.getElementById("signUp2").elements.namedItem("list2").value; 
    var priorityListInput3 = document.getElementById("signUp2").elements.namedItem("list3").value; 
    var priorityListInput4 = document.getElementById("signUp2").elements.namedItem("list4").value; 
    var priorityList = [
        priorityListInput1,
        priorityListInput2,
        priorityListInput3,
        priorityListInput4
    ];
    debugger;
    storeInputs(grades, priorityList);
}

function storeInputs(grades, priorityList) {
    // create template object for all users
    /*
    var usersObject = {
        password: '',
        email: '',
        grades: [],
        priorityList: []
    };
    
    // set username for particular user being signed up
    var username = name;
    
    // create instance of usersObject for user being signed up
    var newUser = Object.assign({}, usersObject);
    
    // set values for user being signed up
    newUser.password = password;
    newUser.email = email;
 
    // convert newUser object to string and save to localStorage
    /* global localStorage 
    localStorage.setItem(name, JSON.stringify(newUser)); */
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
/*global i*/
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}