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

// Function to handle login attempt
function handleLogin() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    console.log("Entered Username:", enteredUsername); // Debugging statement
    console.log("Entered Password:", enteredPassword); // Debugging statement

    if (enteredUsername === loginCredentials.username && enteredPassword === loginCredentials.password) {
        if (isMay27_2024()) {
            window.location.href = "./assests/candles.html";
        } else {
            window.location.href = "./assests/countdown.html";
        }
    } else {
        displayErrorMessage("Oops! Incorrect username or password. Try again!!");
    }
}

// Function to display error message
function displayErrorMessage(message) {
    const errorMessage = document.getElementById("error");
    errorMessage.textContent = message;
    errorMessage.classList.add("show"); // Show the error message
    setTimeout(() => {
        errorMessage.classList.remove("show"); // Hide the error message after 5 seconds
    }, 5000);
}

// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    handleLogin(); // Proceed to handle login
});
