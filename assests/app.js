const imageContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;

prevBtn.addEventListener("click", () => {
  x = x + 45;
  rotate();
});

nextBtn.addEventListener("click", () => {
  x = x - 45;
  rotate();
});

function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

function playBackgroundMusic() {
  var backgroundMusic = document.getElementById('backgroundMusic');
  backgroundMusic.play();
}

function stopBackgroundMusic() {
  var backgroundMusic = document.getElementById('backgroundMusic');
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
}

function startAutoRotate() {
  setInterval(() => {
    x = x - 45; // Adjust the angle to rotate
    rotate();
  }, 1500); // Adjust the interval time (3000ms = 3 seconds)
}

// Play background music and start auto-rotation as soon as the page loads
window.addEventListener('load', () => {
  playBackgroundMusic();
  startAutoRotate();
});
