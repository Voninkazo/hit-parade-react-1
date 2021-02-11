import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import Lyrics from '../components/lyrics';
import { Context } from '../Context';

function LyricsContainer() {
    const { allSongs} = useContext(Context);
    const {id} = useParams();
    console.log(id)
    const songWithDetail = allSongs.find(song => song.id == id);
    console.log(songWithDetail);

    return (
        <Lyrics>
            <Lyrics.Header>{songWithDetail?.artist}: {songWithDetail?.title}</Lyrics.Header>
            <Lyrics.Group>
                <Lyrics.Title>Lyrics</Lyrics.Title>
                <Lyrics.Text>{songWithDetail?.lyrics}</Lyrics.Text>
            </Lyrics.Group>
            <Link to="/">Homepage</Link>
        </Lyrics>
    )
}

export default LyricsContainer
