function loginUser() {
    // grab input values from signup form
    var usernameInput = document.getElementById("login").elements.namedItem("loginName").value;
    var passwordInput = document.getElementById("login").elements.namedItem("loginPswrd").value;
    
    // look for username in localStorage
    /* global localStorage */
    var user = localStorage.getItem(usernameInput);
    
    if (!user) {
        alert("User not found!");
    } else {
        user = JSON.parse(user);
        
        if (user.password !== passwordInput) {
            alert("Password is incorrect");
        } else {
            localStorage.setItem('currentUser', user.name);
            console.log('current user', localStorage.getItem('currentUser'));
        }
    }
    debugger;
}