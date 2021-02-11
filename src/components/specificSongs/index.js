import React from 'react';

import {Container, Group, Pane,Style, Title, Artist} from './styles/specificSongs';

export default function SpecificSongs({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

SpecificSongs.Pane = function SpecificSongsPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}

SpecificSongs.Style = function SpecificSongsStyle({children, ...restProps}) {
    return <Style {...restProps}>{children}</Style>
}

SpecificSongs.Group = function SpecificSongsGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

SpecificSongs.Title = function SpecificSongsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

SpecificSongs.Artist = function SpecificSongsArtist({children, ...restProps}) {
    return <Artist {...restProps}>{children}</Artist>
}