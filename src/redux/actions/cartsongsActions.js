export function addToCart(song) {
    return {
        type: "ADD_TO_CART",
        payload: song,
    }
}

export function removeSongs(id) {
    return {
        type: "REMOVE_FROM_CART",
        payload: id,
    }
}

export function emptyCart() {
    return {
        type: "EMPTY_CART",
    }
}

