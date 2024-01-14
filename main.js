const audioPlayer = document.getElementById('myAudio');
const audioSources = ['assets/musics/Катя Лель - Мой Мармеладный (1).mp3', 'assets/musics/Tom Odell – Another Love (1).mp3'];
const images = ['assets/pictures/download (1).jpeg', 'assets/pictures/download.jpeg'];
let currentAudioIndex = 0;

function playNext() {
    currentAudioIndex = (currentAudioIndex + 1) % audioSources.length;
    audioPlayer.src = audioSources[currentAudioIndex];
    document.getElementById('image2').src = images[currentAudioIndex];
    document.getElementById('image1').src = images[currentAudioIndex === 0 ? 1 : 0];
    audioPlayer.play();
}

document.getElementById('image2').src = images[0];
document.getElementById('image1').src = images[1];
audioPlayer.src = audioSources[0];