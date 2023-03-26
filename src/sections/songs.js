import {getLyricsById, getSongByArtisteID} from "../api";
import {player} from "./player";
import {addToFavourite, removeFromFavourite, isInFavourite} from "./favourite";


const listeMusique = document.querySelector("#songs-list");
const template = document.querySelector("#songs-list-template");



const toggleArtistsSongs = (id) => {
    getSongByArtisteID(id).then(songs => {
        loadSongs(songs)
    })
}

const loadSongs = (songs) => {

    listeMusique.replaceChildren();

    for (const song of songs) {
        const copyTemplate = template.content.cloneNode(true);

        const favouriteButton = copyTemplate.querySelector("#favourite-button")


        toggleAddedToFavourite(favouriteButton, song)


        copyTemplate.querySelector("li").innerText = song['title'];
        copyTemplate.querySelector("a").href = `#lyrics-${song['id']}`

        copyTemplate.querySelector("#play-button").addEventListener("click", () => {
            player.playSong(song, songs)
        })

        favouriteButton.addEventListener("click", () => {
            if (isInFavourite(song['id'])) {
                removeFromFavourite(song)
            } else {
                addToFavourite(song)
            }
            toggleAddedToFavourite(favouriteButton, song)
        })



        listeMusique.appendChild(copyTemplate);


    }
}

const toggleAddedToFavourite = (favoriteButton, song) => {
    if (isInFavourite(song['id'])) {
        favoriteButton.innerHTML = "heart_minus"
    } else {
        favoriteButton.innerHTML = "favorite"
    }
}

const toggleLyrics = (id) => {
    getLyricsById(id).then(song => {

        document.querySelector("#lyrics-section h2").innerHTML = song.title
        document.querySelector("#lyrics-section h3").innerHTML = song.artist.name
        document.querySelector("#lyrics-section p").innerHTML = song.lyrics

    })
}

export {toggleArtistsSongs, loadSongs, toggleLyrics}