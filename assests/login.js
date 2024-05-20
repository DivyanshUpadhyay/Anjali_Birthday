// Define the login credentials
const loginCredentials = {
    username: "Anjali",
    password: "Anjali@2002"
};

// Function to check if the current date is May 27, 2024
function isMay27_2024() {
    const currentDate = new Date();
    return currentDate.getFullYear() === 2024 && currentDate.getMonth() === 4 && currentDate.getDate() === 27;
}

// Function to handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Check if the current date is May 27, 2024
    if (!isMay27_2024()) {
        window.location.href = "./assests/Countdown.html"; // Redirect to Countdown.html if not May 27, 2024
        return; // Stop further execution
    }

    // Get the entered username and password
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Check if the entered credentials match the stored credentials
    if (enteredUsername === loginCredentials.username && enteredPassword === loginCredentials.password) {
        window.location.href = "./assests/candles.html"; // Redirect to candles.html upon successful login
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
