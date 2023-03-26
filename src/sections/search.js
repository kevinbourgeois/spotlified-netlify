import {getSongsSearch} from "../api";
import {loadSongs} from "./songs";

const searchIcon = document.querySelector("#search-symbol")
const searchBar = document.querySelector("#search-bar")
const titleList = document.getElementById("title-list")



searchIcon.addEventListener("click", () => {
    searchBar.classList.add("visible")
})

searchBar.addEventListener("blur", () => {
    searchBar.classList.remove("visible")
})

searchBar.addEventListener("change", () => {
    window.location.hash = "search-" + searchBar.value;

    titleList.innerText = `Résultats pour "${searchBar.value}"`;
    getSongsSearch(searchBar.value).then(songs => {
        loadSongs(songs)
    })
})
