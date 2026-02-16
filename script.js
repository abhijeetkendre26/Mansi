// Initialize Animations
AOS.init();

const music = document.getElementById('bg-music');
const introOverlay = document.getElementById('intro-overlay');
const mainContent = document.getElementById('main-content');
const startBtn = document.getElementById('start-btn');

// Music Controls
const playPauseBtn = document.getElementById('play-pause-btn');
const lyricsBtn = document.getElementById('lyrics-btn');
const lyricsOverlay = document.getElementById('lyrics-overlay');
const closeLyrics = document.querySelector('.close-lyrics');
const replayBtn = document.getElementById('replay-btn');

// 1. Handle "Enter" Click
startBtn.addEventListener('click', () => {
    introOverlay.style.opacity = 0;
    setTimeout(() => {
        introOverlay.style.display = 'none';
        mainContent.style.display = 'block';
        music.play(); // Start music
    }, 500);
});

// 2. Play/Pause Logic
playPauseBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playPauseBtn.innerText = "Pause Music";
    } else {
        music.pause();
        playPauseBtn.innerText = "Play Music";
    }
});

// 3. Replay Logic
replayBtn.addEventListener('click', () => {
    music.currentTime = 0;
    music.play();
});

// 4. Lyrics Logic
lyricsBtn.addEventListener('click', () => {
    lyricsOverlay.style.display = 'flex';
});

closeLyrics.addEventListener('click', () => {
    lyricsOverlay.style.display = 'none';
});
