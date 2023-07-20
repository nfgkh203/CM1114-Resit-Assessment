// Handle registration form submission
document.getElementById("registerForm").addEventListener("submit", function(event){
    // Prevent form submission to avoid page refresh
    event.preventDefault();    

    // Get input values from form
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    // Perform some basic validation
    if(email == "" || password == "") {
        // Notify the user to fill in all fields
        alert("Please enter an email and a password.");
    } else {
        // Confirm successful registration
        alert("Registration successful!");
    }
});

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event){
    // Prevent form submission to avoid page refresh
    event.preventDefault();    

    // Get input values from form
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // Perform some basic validation
    if(email == "" || password == "") {
        // Notify the user to fill in all fields
        alert("Please enter an email and a password.");
    } else {
        // Confirm successful login
        alert("Login successful!");
    }
});
