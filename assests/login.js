// Define the login credentials
const loginCredentials = {
    username: "Anjali",
    password: "Anjali@2002"
};

// Function to handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the entered username and password
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Check if the entered credentials match the stored credentials
    if (enteredUsername === loginCredentials.username && enteredPassword === loginCredentials.password) {
        window.location.href = "./assests/candles.html"; // Redirect to Google upon successful login
    } else {
        // Display error message
        const errorMessage = document.getElementById("error");
        errorMessage.textContent = "Oops! Incorrect username or password. Try again!!";
        errorMessage.classList.add("show"); // Show the error message
        setTimeout(function() {
            errorMessage.classList.remove("show"); // Hide the error message after 5 seconds
        }, 5000);
    }
});
