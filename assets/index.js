const video = document.querySelector("video");
        const button = document.querySelector("button");

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

        const media = new MediaPlayer(video);

        button.onclick = () => {
            (video.paused) ? media.play() : media.pause();
        }