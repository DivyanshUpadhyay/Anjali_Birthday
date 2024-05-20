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

// Function to redirect based on the date
function handleDateRedirection() {
    const isCorrectDate = isMay27_2024();
    console.log("Is it May 27, 2024? ", isCorrectDate); // Debugging statement
    if (!isCorrectDate) {
        window.location.href = "assests/countdown.js";
        return true; // Indicate redirection happened
    }
    return false; // Indicate no redirection
}

// Function to handle login attempt
function handleLogin() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    console.log("Entered Username: ", enteredUsername); // Debugging statement
    console.log("Entered Password: ", enteredPassword); // Debugging statement

    if (enteredUsername === loginCredentials.username && enteredPassword === loginCredentials.password) {
        window.location.href = "assests/candles.html"; 
    } else {
        const errorMessage = document.getElementById("error");
        errorMessage.textContent = "Oops! Incorrect username or password. Try again!!";
        errorMessage.classList.add("show"); // Show the error message
        setTimeout(function() {
            errorMessage.classList.remove("show"); // Hide the error message after 5 seconds
        }, 5000);
    }
}

// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    if (handleDateRedirection()) {
        return; // Stop further execution if redirection happened
    }

    handleLogin(); // Proceed to handle login if no redirection happened
});
