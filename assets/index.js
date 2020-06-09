import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const play_pause_btn = document.getElementById("play-pause-btn");
const mute_unmute_btn = document.getElementById("mute-unmute-btn");

const media = new MediaPlayer({ el: video  ,plugins: [new AutoPlay(), new AutoPause()]});

play_pause_btn.onclick = () => {
    (video.paused) ? media.play() : media.pause();
};

mute_unmute_btn.onclick = () => {
    (video.muted) ? media.unmute() : media.mute();
};

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.message));
};