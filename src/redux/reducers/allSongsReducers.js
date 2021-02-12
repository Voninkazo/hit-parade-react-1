export default function allSongs(state = [], action) {
    switch (action.type) {
        case "ADD_NEW_SONGS":
            return [...state, action.payload]

        case "FAVORITE_SONGS":
            const newArr = state.map(song => {
                if(song.id === action.payload) {
                    return {
                        ...song,
                        isFavorite: !song.isFavorite,
                    }
                };
                return song;
            });
            return newArr;
        
        case "UPVOTE_SONGS":
            const newSongArr = state.map(song => {
                if(song.id === action.payload) {
                    return {
                        ...song,
                        likes: song.likes + 1,
                    }
                };
                return song;
            })
            return newSongArr;

            case "DOWNVOTES_SONGS":
                const newSongs = state.map(song => {
                    if(song.id === action.payload) {
                        return {
                            ...song,
                            dislikes: song.dislikes + 1,
                        }
                    };
                    return song;
                })
                return newSongs;

        default:
        return state;
    }
}