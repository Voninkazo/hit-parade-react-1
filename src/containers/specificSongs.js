import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import SpecificSongs from '../components/specificSongs';

export default function SpecificSongsContainer() {
    const {style} = useParams();
    const allSongs = useSelector(state => state.allSongs);
    
    const newSong = allSongs.filter(song => song.style === style);

    return (
        <SpecificSongs>
            <SpecificSongs.Pane>
                <SpecificSongs.Style>{style}</SpecificSongs.Style>
            </SpecificSongs.Pane>
            {
                newSong.map(song => (
                    <Link to={`/songs/${song.id}`} key={song.id}>
                        <SpecificSongs.Group>
                            <SpecificSongs.Title>{song.title}</SpecificSongs.Title>
                            <SpecificSongs.Artist>{song.artist}</SpecificSongs.Artist>
                        </SpecificSongs.Group>
                    </Link>
                ))
            }
        </SpecificSongs>
    )
}