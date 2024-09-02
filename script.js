const musicContainer = document.querySelector('#music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('#progress');
const progressContainer = document.querySelector('#progres-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song titles
const songs = ['hey', 'summer', 'ukulele']

// Keep track of song
let songIndex = 2;

// Initially load song details
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song; // name of the song will be the song playing
    audio.src = `music/${song}.mp3`; // the song
    cover.src = `images/${song}.jpg`; // the cover/image of the song playing
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

// Play and pause button is the same, so:
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})