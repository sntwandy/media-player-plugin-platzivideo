class MediaPlayer {
    constructor(config) {
        this.media = config;
    }

    play(){
        this.media.play();
    }

    pause(){
        this.media.pause();
    }
}

export default MediaPlayer;