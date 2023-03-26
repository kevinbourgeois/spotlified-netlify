class Player {
    #playbutton = document.querySelector(".play-button");
    #favouritebutton = document.querySelector("#favourite-button");
    #audioPlayer = document.querySelector("#audio-player");
    #progressBar = document.querySelector("#myRange")
    #skipPreviousButton = document.querySelector("#skip-previous")
    #skipNextButton = document.querySelector("#skip-next")
    #songName = document.querySelector("#songName")
    #albumName = document.querySelector("#albumName")
    #songDuration = document.querySelector("#songDuration")
    #currentTime = document.querySelector("#currentTime")

    currentAlbum = [];
    currentSong = null;

    constructor() {

        this.#playbutton.addEventListener("click", (e) => {


            if (this.#audioPlayer.paused) {
                this.#audioPlayer.play();
            } else {
                this.#audioPlayer.pause()
            }
        })

        this.#progressBar.addEventListener("change", (e) => {
            this.#audioPlayer.currentTime = e.target.value;
        })

        this.#audioPlayer.addEventListener("timeupdate", (e) => {

            this.#progressBar.value = this.#audioPlayer.currentTime;
        })

        this.#audioPlayer.addEventListener("durationchange", () => {
            this.#progressBar.max = this.#audioPlayer.duration;
        })

        this.#skipNextButton.addEventListener("click", () => {
            this.playNext()
        })

        this.#skipPreviousButton.addEventListener("click", () => {
            this.playPrevious()
        })


    }

    playSong(song, album) {
        this.currentSong = song;
        this.currentAlbum = album;

        window.location.hash = "#player"

        document.querySelector("#player-section img").src = song['artist']['image_url'];
        document.querySelector("#audio-player").src = song['audio_url'];



        this.#songName.innerHTML = song['title']
        this.#albumName.innerHTML = song['artist']['name']

        this.#songDuration.innerHTML = this.#audioPlayer.duration
        this.#currentTime.innerHTML = this.#audioPlayer.currentTime

        this.#audioPlayer.play()


    }

    playNext() {
        const index = this.currentAlbum.indexOf(this.currentSong)

        if (this.currentAlbum.length - 1 === index) {
            this.playSong(this.currentAlbum[0], this.currentAlbum)
        } else {

            this.playSong(this.currentAlbum[index + 1], this.currentAlbum)

        }
    }

    playPrevious() {
        const index = this.currentAlbum.indexOf(this.currentSong)

        if (index === 0) {
            this.playSong(this.currentAlbum[this.currentAlbum.length-1], this.currentAlbum)
        } else {
            this.playSong(this.currentAlbum[index-1], this.currentAlbum)
        }
    }


}

const player = new Player()
export {player}