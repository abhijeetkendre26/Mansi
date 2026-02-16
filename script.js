document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playPauseBtn');
    const icon = playBtn.querySelector('i');
    
    // Play/Pause Music
    playBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            music.pause();
            icon.classList.add('fa-play');
            icon.classList.remove('fa-pause');
        }
    });

    // Simple Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Target memory cards for animation
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

