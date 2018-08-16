function loginUser() {
    // grab input values from signup form
    var usernameInput = document.getElementById("login").elements.namedItem("loginName").value;
    var passwordInput = document.getElementById("login").elements.namedItem("loginPswrd").value;
    
    // look for username in localStorage
    /* global localStorage */
    var user = localStorage.getItem(usernameInput);
    
    if (!user) {
        // if username is not found, throw an alert
        alert("User not found!");
    } else {
        // else, convert user data to JSON object and check password
        user = JSON.parse(user);
        
        if (user.password !== passwordInput) {
            // throw alert if password is incorrect
            alert("Password is incorrect");
        } else {
            // else sign user in 
            currentUser = usernameInput;
            localStorage.setItem('currentUser', currentUser);
            console.log('current user', localStorage.getItem('currentUser'));
        }
    }
}