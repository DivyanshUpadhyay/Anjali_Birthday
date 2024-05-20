// Set the date we're counting down to
var countDownDate = new Date("May 27, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML elements
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Function to add leading zeros to the numbers
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
document.getElementById("yesButton").addEventListener("click", function() {
  // Show the modal when "Yes" button is clicked
  document.getElementById("cardModal").style.display = "block";
});

// Close the modal when the close button (x) is clicked
document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("cardModal").style.display = "none";
});

// Close the modal when the user clicks anywhere outside of the modal
window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("cardModal")) {
      document.getElementById("cardModal").style.display = "none";
  }
});
document.getElementById("noButton").addEventListener("click", function() {
  // Show the modal when "Yes" button is clicked
  document.getElementById("cardModala").style.display = "block";
});

// Close the modal when the close button (x) is clicked
document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("cardModala").style.display = "none";
});

// Close the modal when the user clicks anywhere outside of the modal
window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("cardModala")) {
      document.getElementById("cardModala").style.display = "none";
  }
});
