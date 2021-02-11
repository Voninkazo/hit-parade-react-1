import React from 'react';

import {Container, Text, Title, Group, Header} from './styles/lyrics';

function Lyrics({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Lyrics.Text = function LyricsText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Lyrics.Header = function LyricsHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>
}

Lyrics.Group = function LyricsGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}
Lyrics.Title = function LyricsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

export default Lyrics;
