const BASE_URL = "https://webmob-ui-22-spotlified.herokuapp.com";


const getArtistes = () => fetch(BASE_URL + "/api/artists")
    .then(res => res.json());


const getSongByArtisteID = (id) => fetch(BASE_URL + `/api/artists/${id}/songs`)
        .then(res => res.json());

const getSongsSearch = (name) => fetch(BASE_URL + `/api/songs/search/${encodeURIComponent(name)}`)
    .then(res => res.json());

const getLyricsById = (id) =>
    fetch(BASE_URL + `/api/songs/${id}`)
        .then(res => res.json())


export {getArtistes, getSongByArtisteID, getSongsSearch, getLyricsById}