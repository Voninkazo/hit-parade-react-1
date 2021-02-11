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
import { IconLink } from '../components/popularSongs/styles/popularSongs';

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
                    <PopularSongs.Title>{song.title}</PopularSongs.Title>
                    <PopularSongs.Artist>{song.artist}</PopularSongs.Artist>
                </PopularSongs.SongId>
                <PopularSongs.ImgLike>
                    <PopularSongs.TextSmall>{song.likes}</PopularSongs.TextSmall>
                    <PopularSongs.IconLike src={arrowUp} onClick={() => increaseLikes(song.id)} />
                </PopularSongs.ImgLike>
                <PopularSongs.ImgDislike>
                    <PopularSongs.TextSmall>{song.dislikes}</PopularSongs.TextSmall>
                    <PopularSongs.IconDislike src={arrowDown} onClick={() => increaseDislikes(song.id)}/>
                </PopularSongs.ImgDislike>
                <PopularSongs.Cart>{cartFunction(song.id)}</PopularSongs.Cart>
                <PopularSongs.DetailLink>
                    <Link to={`/songs/${song.id}`}>
                        <IconLink src={more}/>
                    </Link>
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