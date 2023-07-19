document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault();    // Prevent form submission
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    // Perform some basic validation
    if(email == "" || password == "") {
        alert("Please enter an email and a password.");
    } else {
        alert("Registration successful!");
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();    // Prevent form submission
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // Perform some basic validation
    if(email == "" || password == "") {
        alert("Please enter an email and a password.");
    } else {
        alert("Login successful!");
    }
});
