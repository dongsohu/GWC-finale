function readSignUpInputs() {
    // grab input values from signup form
    var nameInput = document.getElementById("signUp").elements.namedItem("usernameInsert").value;
    var emailInput = document.getElementById("signUp").elements.namedItem("emailInsert").value;
    var passwordInput = document.getElementById("signUp").elements.namedItem("usersPswrd").value;
    var passwordInput2 = document.getElementById("signUp").elements.namedItem("usersPswrd2").value;

    // for later: return error if passwords don't match
    
    // call storeInputs function to store signup info
    storeSignUpInputs(nameInput, emailInput, passwordInput); 
    
    // for later: save username in localStorage so we know who is logged in
}

function storeSignUpInputs(name, email, password) {
    // create template object for all users
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
    /* global localStorage */
    localStorage.setItem(name, JSON.stringify(newUser));
    // by default, log in new user
    localStorage.setItem('currentUser', name);
    console.log('current user', localStorage.getItem('currentUser'));
}

function readClassInputs(){
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
    storeClassInputs(grades, priorityList);
}

function storeClassInputs(name, grades, priorityList) {
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
    /* global localStorage */
    // localStorage.setItem(name, JSON.stringify(newUser)); 
}

function loadUserPage() {
    debugger;
}

