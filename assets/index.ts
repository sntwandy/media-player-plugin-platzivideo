import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector("video");
const play_pause_btn: HTMLElement = document.getElementById("play-pause-btn");
const mute_unmute_btn: HTMLElement = document.getElementById("mute-unmute-btn");

const media = new MediaPlayer({ el: video  ,plugins: [new AutoPlay(), new AutoPause(), new Ads()]});

play_pause_btn.onclick = () => {
    (video.paused) ? media.play() : media.pause();
};

mute_unmute_btn.onclick = () => {
    (video.muted) ? media.unmute() : media.mute();
};

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.message));
};