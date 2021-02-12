import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import favoriteBorder from '../icons/favorite.svg';
import  favorite from '../icons/favorite-fill.svg';
import arrowUp from '../icons/arrow-up.svg';
import arrowDown from '../icons/arrow-down.svg';
import more from '../icons/more.svg';
import addCartIcon from '../icons/add-cart.svg';
import cartIcon from '../icons/shopping-cart-fill.svg';

import {PopularSongs} from '../components';
import {favoriteSongs, downvoteSongs,upvoteSongs} from '../redux/actions/allSongsActions';
import {addToCart, removeSongs,} from '../redux/actions/cartsongsActions';

export default function PopularSongsContainer() {

    const allSongs = useSelector(state => state.allSongs);
    const cartSongs = useSelector(state => state.cartSongs);

    const dispatch = useDispatch();
    console.log(allSongs);

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
                    onClick={() => dispatch(removeSongs(song.id))}
                     />
                }
                else{
                    return <img 
                    src={addCartIcon} 
                    className="icon-add-cart" 
                    onClick={() => dispatch(addToCart(song))}
                     />
                }
        }

    return (
        <PopularSongs key={song.id}>
            <PopularSongs.SongsContainer>
                <PopularSongs.ImgFavorite>
                    <PopularSongs.IconFavorite 
                        src={song.isFavorite ? favorite : favoriteBorder} 
                        onClick={() => dispatch(favoriteSongs(song.id))} 
                         />
                </PopularSongs.ImgFavorite>
                <PopularSongs.SongId>
                    <PopularSongs.Title>{song.title}</PopularSongs.Title>
                    <PopularSongs.Artist>{song.artist}</PopularSongs.Artist>
                </PopularSongs.SongId>
                <PopularSongs.ImgLike>
                    <PopularSongs.TextSmall>{song.likes}</PopularSongs.TextSmall>
                    <PopularSongs.IconLike src={arrowUp} 
                    onClick={() => dispatch(upvoteSongs(song.id))}
                     />
                </PopularSongs.ImgLike>
                <PopularSongs.ImgDislike>
                    <PopularSongs.TextSmall>{song.dislikes}</PopularSongs.TextSmall>
                    <PopularSongs.IconDislike src={arrowDown} 
                    onClick={() => dispatch(downvoteSongs(song.id))}
                    />
                </PopularSongs.ImgDislike>
                <PopularSongs.Cart>{cartFunction(song.id)}</PopularSongs.Cart>
                <PopularSongs.DetailLink>
                    <Link to={`/songs/${song.id}`}>
                        <PopularSongs.IconLink src={more}/>
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