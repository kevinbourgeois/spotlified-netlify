import {getArtistes, getSongByArtisteID} from "./api.js";
import {toggleArtistsList} from "./sections/artists";
import {loadSongs, toggleArtistsSongs, toggleLyrics} from "./sections/songs";
import {getFavouriteList} from "./sections/favourite";

import "./sections/search"
import "./sections/songs"

window.addEventListener("hashchange", (e) => {

    let hash = window.location.hash;

    const hashSplit = hash.split('-');


    if (hash === '') hash = '#home'

    switch (hashSplit[0]) {

        case "#artists":
            toggleNav(hashSplit[0])

            //Si un ID se trouve dans le hash
            if (hashSplit[1]) {

                document.querySelector("#list-section").classList.add("active");

                //Affiche les musiques de l'artiste en fonction de son ID
                toggleArtistsSongs(hashSplit[1]);
                toggleSection("#list")

            } else {
                toggleSection(hashSplit[0])
                //Affiche tout les artistes
                toggleArtistsList()
            }

            break;

        case "#search":
            toggleSection("#list")
            break;

        case "#favourite":
            toggleSection("#list")
            toggleNav("#favourite")

            loadSongs(getFavouriteList())

            break;

        case "#lyrics":
            toggleSection("#lyrics")
            toggleLyrics(hashSplit[1])
            break;

        default:
            toggleSection(hashSplit[0])
            toggleNav(hashSplit[0])
            break;
    }


});

window.addEventListener("updateStorage", () => {
    if (window.location.hash === '#favourite')
        loadSongs(getFavouriteList())
})


const toggleSection = (hash) => {
    document.querySelector("section.active").classList.remove("active");
    document.querySelector(hash + "-section").classList.add("active");
}

const toggleNav = (hash) => {
    document.querySelector("footer a.active")?.classList.remove("active");
    document.querySelector(`footer a[href="${hash}"]`)?.classList.add("active");
}

window.addEventListener("online", () => {
    alert("je suis online")
})

window.addEventListener("offline", () => {
    alert("je suis offline")
})

//navigator.serviceWorker.register(new URL('workerCacheFetched.js', import.meta.url))


