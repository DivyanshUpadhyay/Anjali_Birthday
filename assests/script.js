document.getElementById('blowOutButton').addEventListener('click', function() {
    var flames = document.querySelectorAll('.flame, .glow, .blinking-glow');
    flames.forEach(function(flame) {
        flame.style.display = 'none';
    });

    createBalloons();
    playBackgroundMusic();

    // Redirect to wish.html after 8 seconds
    setTimeout(function() {
        window.location.href = 'wish.html';
    }, 8000);
});

document.getElementById('popButton').addEventListener('click', function() {
    var balloons = document.querySelectorAll('.balloon');
    balloons.forEach(function(balloon) {
        balloon.remove();
    });

    stopBackgroundMusic();
});

function createBalloons() {
    var container = document.querySelector('.container');

    for (var i = 0; i < 10; i++) {
        var balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.backgroundColor = getRandomColor();
        container.appendChild(balloon);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
