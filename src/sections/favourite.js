import jsonStorage from "../lib/JsonStorage";

const storage = new jsonStorage({name: "jsonStorage", eventName: "updateStorage"})

const addToFavourite = (song) => {
    console.log(storage)
        storage.setItem(song['id'], song)
}

const removeFromFavourite = (song) => {
    storage.removeItem(song['id'])
}

const isInFavourite = (songId) => {

    let res = true;
        if (!storage.getItem(songId))
            res = false;

    return res
}

const getFavouriteList = () => {
    return storage.toArray().map(value => value[1])
}

export {addToFavourite, removeFromFavourite, isInFavourite, getFavouriteList}

