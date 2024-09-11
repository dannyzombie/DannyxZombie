const resizer = document.getElementById('resizer');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('video');

resizer.addEventListener('mousedown', function (e) {
    e.preventDefault();

    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
});

function resize(e) {
    const width = e.clientX - videoContainer.getBoundingClientRect().left;
    const height = width * 9 / 16; // Maintain 16:9 aspect ratio
    videoContainer.style.width = width + 'px';
    videoContainer.style.height = height + 'px';
}

function stopResize() {
    window.removeEventListener('mousemove', resize);
    window.removeEventListener('mouseup', stopResize);
}
