import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import SpecificSongs from '../components/specificSongs';
import { Context } from '../Context';

export default function SpecificSongsContainer() {
    const {style} = useParams();
    const {allSongs, showSongDetail} = useContext(Context);

    console.log(style)
    console.log(allSongs)
    const newSong = allSongs.filter(song => song.style === style);

    return (
        <SpecificSongs>
            <SpecificSongs.Pane>
                <SpecificSongs.Style>{style}</SpecificSongs.Style>
            </SpecificSongs.Pane>
            {
                newSong.map(song => (
                    <Link to={`/songs/${song.id}`} key={song.id}>
                        <SpecificSongs.Group onClick={() => showSongDetail(song)}>
                            <SpecificSongs.Title>{song.title}</SpecificSongs.Title>
                            <SpecificSongs.Artist>{song.artist}</SpecificSongs.Artist>
                        </SpecificSongs.Group>
                    </Link>
                ))
            }
        </SpecificSongs>
    )
}