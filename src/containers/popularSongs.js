import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import favoriteBorder from '../icons/favorite.svg';
import  favorite from '../icons/favorite-fill.svg';
import arrowUp from '../icons/arrow-up.svg';
import arrowDown from '../icons/arrow-down.svg';
import more from '../icons/more.svg';
import addCartIcon from '../icons/add-cart.svg';
import cartIcon from '../icons/shopping-cart-fill.svg';


import {PopularSongs} from '../components';
import {Context} from '../Context';

export default function PopularSongsContainer() {
    const {allSongs,
        cartSongs,
        addToCart, 
        removeSongs,
        showSongDetail,
        toggleFavorite,
        increaseDislikes,
        increaseLikes
    } = useContext(Context);

    const sortedSongsByPopularity =  
        allSongs.sort((a,b) =>{ const ratio1 = a.likes - a.dislikes;
        const ratio2 = b.likes - b.dislikes;
        return ratio2 - ratio1;
        })

    const showSongs =
        sortedSongsByPopularity.map(song => {

            function cartFunction() {
                if(cartSongs.some((cartItem => cartItem.id === song.id))) {
                    return <img 
                    src={cartIcon} 
                    className="icon-add-cart" 
                    onClick={() => removeSongs(song.id)}
                     />
                }
                else{
                    return <img 
                    src={addCartIcon} 
                    className="icon-add-cart" 
                    onClick={() => addToCart(song)}
                     />
                }

        }

    return (
        <PopularSongs key={song.id}>
            <PopularSongs.SongsContainer>
                <PopularSongs.ImgFavorite>
                    <PopularSongs.IconFavorite 
                        src={song.isFavorite ? favorite : favoriteBorder} 
                        onClick={() => toggleFavorite(song.id)} 
                         />
                </PopularSongs.ImgFavorite>
                <PopularSongs.SongId>
                    <PopularSongs.Title></PopularSongs.Title>
                    <PopularSongs.Artist></PopularSongs.Artist>
                </PopularSongs.SongId>
                <PopularSongs.ImgLike>
                    <PopularSongs.IconLike />
                </PopularSongs.ImgLike>
                <PopularSongs.ImgDislike>
                    <PopularSongs.IconDislike />
                </PopularSongs.ImgDislike>
                <PopularSongs.Cart></PopularSongs.Cart>
                <PopularSongs.DetailLink>
                    <Link to=""></Link>
                </PopularSongs.DetailLink>
            </PopularSongs.SongsContainer>
        </PopularSongs>
    )
    })
    return (
        <>
        {showSongs}
        </>
    )
}