import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector("video");
const button = document.querySelector("button");

const media = new MediaPlayer(video);

button.onclick = () => {
    (video.paused) ? media.play() : media.pause();
}