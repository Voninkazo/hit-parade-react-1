export function favoriteSongs(id) {
    return {
        type: "FAVORITE_SONGS",
        payload: id,
    }
}

export function upvoteSongs(id) {
    return {
        type: "UPVOTE_SONGS",
        payload: id,
    }
}

export function downvoteSongs(id) {
    return {
        type: "DOWNVOTES_SONGS",
        payload: id,
    }
}

export function addSongs(newSong) {
    return {
        type: "ADD_NEW_SONGS",
        payload: newSong,
    }
}