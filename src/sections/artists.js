import {getArtistes} from "../api";


const listeArtiste = document.querySelector(".artists-list");

const toggleArtistsList = ( ) => {
    getArtistes().then((artistes) => {
        const template = document.querySelector("#template-artist");
        listeArtiste.replaceChildren();

        for (const artiste of artistes) {
            const copyTemplate = template.content.cloneNode(true);

            copyTemplate.querySelector("img").src = artiste['image_url'];
            copyTemplate.querySelector("p").innerText = artiste['name'];
            copyTemplate.querySelector("a").href = "#artists-" + artiste['id'];

            listeArtiste.appendChild(copyTemplate);
        }
    });



}

export {toggleArtistsList}